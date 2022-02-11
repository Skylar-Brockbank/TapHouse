import React from 'react';
import PropTypes from 'prop-types';
import KombuchaCard from './KombuchaCard';

function KombuchaList(props){
  return(
    <div id='list'>
      <h2>Kombucha List</h2>
      <div className ="card" onClick={() => props.newItem('form',0)}>
        <h4>+ new Kombucha</h4>
      </div>
      {/* foreach statement that will make kombuchaCards */}
      {props.list.map((x,index)=> <KombuchaCard dex={index} imethod={props.newItem} key={x.id} target={x}/>)}
    </div>
    );
}
export default KombuchaList;

KombuchaList.propTypes={
  list: PropTypes.array,
  newItem: PropTypes.func
}