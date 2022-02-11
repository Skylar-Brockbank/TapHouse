import React from 'react';
import PropTypes from 'prop-types';

function KombuchaDetail(props){
  return(
    <React.Fragment>
      <h1>{props.target.name}</h1>
      <hr/>
      <h5>Brand: {props.target.brand}</h5>
      <br/>
      <h5>Price: ${props.target.price}</h5>
      <br/>
      <h5>ABV: {props.target.abv}%</h5>
      <br/>
      <h5>QTY: {props.target.qty}</h5>
      <hr/>
      <button onClick={()=>props.sell(props.dex)}>Sell</button>
      <button onClick={()=>props.restock(props.dex,124)}>Restock</button>
    </React.Fragment>
  );
}

export default KombuchaDetail;

KombuchaDetail.propTypes ={
  target: PropTypes.object,
  sell: PropTypes.func,
  restock: PropTypes.func
}