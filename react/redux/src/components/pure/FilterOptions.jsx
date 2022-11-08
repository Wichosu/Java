import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from '../containers/FilterContainer';


const FilterOptions = () => {
  
  
  return (
    <div className='filters'>
      {/* Fitler Containers */}
      <FilterContainer filter='SHOW_ALL'>
        ALL
      </FilterContainer>
      <FilterContainer filter='SHOW_ACTIVE'>
        ACTIVE
      </FilterContainer>
      <FilterContainer filter='SHOW_COMPLETED'>
        COMPLETED
      </FilterContainer>   
    </div>
  );
};

export default FilterOptions;
