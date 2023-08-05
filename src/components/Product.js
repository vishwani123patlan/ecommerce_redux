import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToBasket, removeItemFromBasket } from '../features/basketSlice';

function Product({id, title}) {
  const dispatch = useDispatch();

  const addItem = () => {
    const product ={id, title}
    dispatch(addItemToBasket(product))
  }
  const removeItem = () =>{
    dispatch(removeItemFromBasket({id}))
  }

  return (
    <div className='flex justify-between items-center p-10 border-blue-600 border m-5'>
      <p>{title}</p>
      <div className='space-x-2'>
      <button onClick={addItem} className='p-2 bg-red-500 rounded-2xl focus:outline-none focus:ring-2 ring-red-800 hover:bg-red-400'>Add to Basket</button>
      <button onClick={removeItem} className='p-2 bg-yellow-500 rounded-2xl focus:outline-none focus:ring-2 ring-yellow-800 hover:bg-yellow-400'>Remove from basket</button></div>
    </div>
  )
}

export default Product