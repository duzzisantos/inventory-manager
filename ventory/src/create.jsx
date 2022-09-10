import React from 'react'
import Container from './component/container'

const Create = () => {
  return (
    <Container>
        <form className='new-inventory'>
            <h3>Register new inventory</h3>
            <span>All fields are required. ***</span>
            <label htmlFor='officer'>Inventory officer name</label>
            <input type="text" id="officer" name="officer"></input>
            <label htmlFor='category'>Category</label>
            <select>
            <option value="beverages" name="beverages">
              Beverages
            </option>
            <option value="dairy" name="dairy">
              Dairy
            </option>
            <option value="meat" name="meat">
              Meat
            </option>
            <option value="toileteries" name="toileteries">
              Toileteries
            </option>
            </select>
            <label htmlFor='product'>Product</label>
            <select></select>
            <label htmlFor='batch-number'>Batch number</label>
            <input type="number" id="batch-number" name="batch-number"></input>
            <label htmlFor='batch-units'>Batch units</label>
            <input type="number" id="batch-units" name="batch-units"></input>
            <label htmlFor='product-image'>Product image</label>
            <input type="file" id="product-image" name="product-image"/>
            <label htmlFor='date-time'>Entry date</label>
            <input type="date" id='date-time' name='date-time'/>
            <button type='submit' id='submit-btn'>Submit</button>
        </form>
    </Container>
  )
}

export default Create
