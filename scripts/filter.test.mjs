import assert from 'node:assert/strict';
import { test } from 'node:test';
import { matchesSource } from '../src/data/filter.mjs';

test('readers can combine mixed-case words and a source type', () => {
  assert.equal(matchesSource('Sunscreen skin aging trial', 'Study', ' SKIN  sunscreen ', 'Study'), true);
  assert.equal(matchesSource('Sunscreen skin aging trial', 'Study', 'skin eczema', 'Study'), false);
  assert.equal(matchesSource('Sunscreen skin aging trial', 'Study', 'skin', 'Review'), false);
});

test('clearing search and kind restores every source, while unmatched text returns none', () => {
  assert.equal(matchesSource('magnesium', 'Review', ' ', 'all'), true);
  assert.equal(matchesSource('magnesium', 'Review', 'unfindable', 'all'), false);
});
