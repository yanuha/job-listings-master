import { connect } from 'react-redux';
import { removeFilter, clearFilter } from 'store/filters/filters-actions';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const _FilterPanel = ({ filters, removeFilter, clearFilter }) => {
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
              onClear={() => removeFilter(item)}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => clearFilter}>
          Clear
        </button>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const FilterPanel = connect(mapStateToProps, { removeFilter, clearFilter })(
  _FilterPanel
);

export { FilterPanel };
