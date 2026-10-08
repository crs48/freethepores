import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import config from '../astro.config.mjs';

const root = path.resolve('dist');
const base = `${(config.base ?? '/').replace(/\/$/, '')}/`;
const walk = async directory => (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => {
  const fullPath = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(fullPath) : [fullPath];
}))).flat();
const files = (await walk(root)).filter(file => file.endsWith('.html'));
const documents = new Map(await Promise.all(files.map(async file => [file, await readFile(file, 'utf8')])));
const errors = [];
for (const [file, html] of documents) {
  for (const [, attribute] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|data:)/.test(attribute)) continue;
    const url = new URL(attribute, `https://example.test${base}${path.relative(root, file)}`);
    if (!url.pathname.startsWith(base)) { errors.push(`${file}: missing configured base in ${attribute}`); continue; }
    const relative = decodeURIComponent(url.pathname.slice(base.length));
    const target = path.join(root, relative.endsWith('/') || !relative ? `${relative}index.html` : relative);
    try { await access(target); } catch { errors.push(`${file}: missing ${attribute}`); continue; }
    if (url.hash && documents.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!documents.get(target).includes(`id="${id}"`)) errors.push(`${file}: missing anchor ${attribute}`);
    }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated internal links, assets, and citation anchors across ${files.length} HTML pages.`);
