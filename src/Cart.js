import React from 'react'
import Header from './header/Header';
import "./Cart.css";
const Cart = ({cartItems ,  handleAddItems, handleRemoveItems, handleClearItem}) => {
    const totalprice = cartItems.reduce((price,items)=> price+items.quantity * items.price,0 )
  return (
    <>
    <Header />
    <div className='cart-items'>
    <div className='cart-items-header'>Cart Items:</div>
    
    
    {cartItems.length === 0 && (<div className='cart-items-empty'>Cart Empty </div>
  )} 
  <div>
    {cartItems.map((items)=>(
        <div key={items.id} className="cart-items-list">
        <div className='image-border'><img   className= "cart-items-image" src={items.image} alt={items.name} />
        <div className='cart-items-name'>{items.name} </div></div>
         
         <div className='cart-items-price'>₹{items.price} </div>
         <div className='cart-item-function'>
         <button className='cart-item-add' 
         onClick={()=> handleAddItems(items)}>+</button>
         <button className='cart-item-remove' onClick={()=> {handleRemoveItems(items);alert("Item Removed !");}}>-</button></div>
         <button className='cart-item-clear' onClick={()=> handleClearItem(items)}>Remove</button>
         <div className='cart-items-price'>
                {items.quantity} 
         </div>
         </div>

    ))}
  </div>
  <div className='cart-items-total-price-name'>Total Price
  <div className='cart-items-total-price'>₹{totalprice}</div></div>
  </div>
  </>
  );
};

export default Cart