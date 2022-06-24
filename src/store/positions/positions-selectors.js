export const selectAllPositions = (state) => state.positions;

export const selectFilteredPositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions;
  }

  const filteredPositions = state.positions.filter((pos) => {
    const activeFilters = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );

    return filters.every((filter) => activeFilters.includes(filter));
  });

  return filteredPositions;
};
