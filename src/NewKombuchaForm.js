import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKombuchaForm(props){
  function handleSubmission(event){
    event.preventDefault();
    props.new({name: event.target.name.value, brand:event.target.brand.value, price:event.target.price.value, abv:event.target.abv.value,qty:124, id: v4()});
  }
  return(
    <React.Fragment>
      <form onSubmit={handleSubmission}>
        <label>Name: <input type='text' name='name' placeholder='Name'/></label>
        <label>Brand: <input type='text' name='brand' placeholder='Brand'/></label>
        <label>price: <input type='number' name='price' min='0'/></label>
        <label>ABV: <input type='number' name='abv' min='1' max='100'/></label>
        <button type='submit'>submit</button>
      </form>
    </React.Fragment>
    )
}

NewKombuchaForm.propTypes ={
  new: PropTypes.func
};