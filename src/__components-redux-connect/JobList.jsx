import { connect } from 'react-redux';
import { addFilter } from 'store/filters/filters-actions';

import { selectFilteredPositions } from 'store/positions/positions-selectors';
import { JobPosition } from './JobPosition';

const _JobList = ({ positions, addFilter }) => {
  const handleAddFilter = (filter) => {
    addFilter(filter);
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

const mapStateToProps = (state) => ({
  positions: selectFilteredPositions(state, state.filters),
});

const JobList = connect(mapStateToProps, { addFilter })(_JobList);

export { JobList };
