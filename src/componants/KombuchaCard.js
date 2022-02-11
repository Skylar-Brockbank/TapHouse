import React from "react";
import PropTypes from 'prop-types';

function KombuchaCard(props){
  let q = null;
  if(props.target.qty >0){
    q=props.target.qty;
  }else{
    q="Out of Stock";
  }
  return(
    <div className='card' onClick={()=> props.imethod('detail', props.dex)}>
      {console.log(props.dex)}
      <h3>{props.target.name}</h3>
      <p>{q}</p>
    </div>
  );
}

export default KombuchaCard;

KombuchaCard.propTypes={
  target: PropTypes.object,
  imethod: PropTypes.func,
  dex: PropTypes.number
}