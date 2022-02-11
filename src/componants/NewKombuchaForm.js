import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKombuchaForm(props){
  function handleSubmission(event){
    event.preventDefault();
    props.newItem({name: event.target.name.value, brand:event.target.brand.value, price:event.target.price.value, abv:event.target.abv.value,qty:124, id: v4()});
    document.getElementById('newForm').reset();
  }
  return(
    <React.Fragment>
      <form id='newForm' onSubmit={handleSubmission}>
        <label>Name: <input type='text' name='name' placeholder='Name' required/></label>
        <br/>
        <label>Brand: <input type='text' name='brand' placeholder='Brand'required/></label>
        <br/>
        <label>price: <input type='number' name='price' min='0'required/></label>
        <br/>
        <label>ABV: <input type='number' name='abv' min='1' max='100'required/></label>
        <br/>
        <button type='submit'>submit</button>
      </form>
    </React.Fragment>
    )
}
export default NewKombuchaForm;

NewKombuchaForm.propTypes ={
  new: PropTypes.func
};