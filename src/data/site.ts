export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const repository = 'https://github.com/crs48/freethepores';
export const reviewed = 'October 8, 2026';
