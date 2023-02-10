import React from 'react';
import Product from '../Products/Product';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Cart from '../Cart';
const Rout = ({shopItems, cartItems, handleAddItems}) => {
  return( 
  <div>
  <BrowserRouter>
  <Routes>
  <Route path="/" exact  element={<Product shopItems={shopItems} handleAddItems={handleAddItems}/>} />
  <Route path ="/cart" exact element={<Cart  cartItems={cartItems} handleAddItems={handleAddItems}/>}/>
        
  </Routes>
        </BrowserRouter>     
    </div>
    )
};

export default Routes ;