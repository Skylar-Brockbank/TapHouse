import React from "react";
import PropTypes from 'prop-types';

function KombuchaCard(props){
  let q = null;
  if(props.target.qty >0){
    q=<p>Qty: {props.target.qty}</p>;
  }else{
    q=<p className='conflict'>Out of Stock</p>;
  }
  return(
    <div className='card' onClick={()=> props.imethod('detail', props.dex)}>

      <h3>{props.target.name}</h3>
      {q}
    </div>
  );
}

export default KombuchaCard;

KombuchaCard.propTypes={
  target: PropTypes.object,
  imethod: PropTypes.func,
  dex: PropTypes.number
}