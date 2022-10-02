import { useSelector } from 'react-redux';
import { selectFilteredPositions } from 'features/positions/positions-slice';
import { selectFilters } from 'features/filter/filter-slice';

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectFilteredPositions(state, currentFilters)
  );

  return positions;
};
