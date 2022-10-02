import { useSelector, useDispatch } from 'react-redux';
import { removeFilter, clearFilter, selectFilters } from './filter-slice';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (filters.length === 0) {
    return null;
  }
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {filters.map((item) => (
            <Badge
              key={item}
              variant='clearable'
              onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
