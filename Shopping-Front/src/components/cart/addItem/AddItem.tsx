import { Box } from '@mui/material';
import React from 'react'
import "./addItem.styles.css";

export const AddItem = () => {
  return (
    <div className='addItem-container'>
        <h1 className='title-addItem'>Add a new item</h1>
        <form action="" className='form-addItem'>
            <div className='field-container'>
                <label htmlFor="" className='label'>Name</label>
                <input type="text" className='field input' placeholder='Enter a name'/>
            </div>
            <div className='field-container'>
                <label htmlFor="" className='label'>Note (optional)</label>
                <textarea name="" id="" placeholder='Enter a note' className='field textarea'></textarea>
            </div>
            <div className='field-container'>
                <label htmlFor="" className='label'>Image (optional)</label>
                <input type="text"  className='field input' placeholder='Enter a url'/>
            </div>
            <div className='field-container'>
                <label htmlFor="" className='label'>Category</label>
                <select className='field select'>
                    <option value="" selected disabled className='option'>Enter a category</option>
                    <option value="" className='option'>Fruit and vegetables</option>
                    <option value="" className='option'>Meat and Fish</option>
                </select>
            </div>
            <div className='submit-cancel'>
                <button className='cancel-button'>cancel</button>
                <input type="submit" value="Save" className='submit-button'/>
            </div>
        </form>
    </div>
  )
}
