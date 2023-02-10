import React, {useState} from 'react'
import Data from './data/Data';
import Header from './header/Header';
import Rout from './Routes/Routes';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Product from './Products/Product';
import Cart from './Cart';
// import Product from './Products/Product';
const App = () => {
  const [ shopItems, setshopItems ] = useState(Data.shopItems);
  const [cartItems, setCartItems] = useState([]);  
  const handleAddItems = (item) =>{
    const ItemsExist = cartItems.find((items) => items.id === item.id);
    if(ItemsExist){
      setCartItems(cartItems.map((items)=> items.id === item.id ? {...ItemsExist,quantity:ItemsExist.quantity+1}:items));
    } else{
        setCartItems([...cartItems,{...item ,quantity:1}]);
      
    }
  };
  const handleRemoveItems = (item) =>{
    const ItemsExist = cartItems.find((items) => items.id === item.id);
    if(ItemsExist.quantity == 1){
      setCartItems(cartItems.filter((items)=> items.id !== item.id));
    }
    else{
      setCartItems(
        cartItems.map((items)=> items.id === item.id ? {...ItemsExist,quantity: ItemsExist.quantity-1} : items
      )
      );
      
      }
   }
   const handleClearItem =(item) =>{
    const ItemsExist = cartItems.find((items)=> items.id === item.id);

    setCartItems(cartItems.filter((items)=> items.id !== item.id));
   }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact  element={<Product shopItems={shopItems} handleAddItems={handleAddItems}/>} />
    <Route path="/home" exact  element={<Product shopItems={shopItems} handleAddItems={handleAddItems}/>} />
    <Route path ="/cart" exact element={<Cart  cartItems={cartItems} handleAddItems={handleAddItems} handleRemoveItems={handleRemoveItems} handleClearItem={handleClearItem}/>}/>
    </Routes>
          </BrowserRouter>  

    
  )
}

export default App