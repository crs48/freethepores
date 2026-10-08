/** All search terms must occur; the source kind is an independent filter. */
export const matchesSource = (text, sourceKind, query, selectedKind) =>
  (selectedKind === 'all' || sourceKind === selectedKind) &&
  query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
    .every(term => text.toLocaleLowerCase().includes(term));
