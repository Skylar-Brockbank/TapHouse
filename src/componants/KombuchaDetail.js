import React from 'react';
import PropTypes from 'prop-types';

function KombuchaDetail(props){
  return(
    <React.Fragment>
      <h3>{props.target.name}</h3>
    </React.Fragment>
  );
}

export default KombuchaDetail;

KombuchaDetail.propTypes ={
  target: PropTypes.object,
  sell: PropTypes.func,
  restock: PropTypes.func
}