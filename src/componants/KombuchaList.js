import React from 'react';
import PropTypes from 'prop-types';

function KombuchaList(props){
  return(
    <React.Fragment>
      <h3>List</h3>
      <div className ="card" onClick={() => props.newItem('form')}>
        <h4>+ new Kombucha</h4>
      </div>
      {/* foreach statement that will make kombuchaCards */}
    </React.Fragment>
    );
}
export default KombuchaList;

KombuchaList.propTypes={
  list: PropTypes.array,
  newItem: PropTypes.func
}