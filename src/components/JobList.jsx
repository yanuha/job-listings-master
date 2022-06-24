import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/filters-actions';

import { selectFilteredPositions } from 'store/positions/positions-selectors';
import { selectFilters } from 'store/filters/filters-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const dispatch = useDispatch();

  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectFilteredPositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
