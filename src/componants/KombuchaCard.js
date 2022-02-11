import React from "react";
import PropTypes from 'prop-types';

function KombuchaCard(props){
  return(
    <div className='card' onClick={()=> props.imethod('detail', props.dex)}>
      {console.log(props.dex)}
      <h3>{props.target.name}</h3>
      <p>{props.target.qty}</p>
    </div>
  );
}

export default KombuchaCard;

KombuchaCard.propTypes={
  target: PropTypes.object,
  imethod: PropTypes.func,
  dex: PropTypes.number
}