import React from "react";

function KombuchaCard(props){
  return(
    <div className='card'>
      <h4>{props.target.name}</h4>
      <p>{props.target.quantity}</p>
    </div>
  );
}

export default KombuchaCard;

KombuchaCard.propTypes={
  target: PropTypes.object
}