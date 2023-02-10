import React from 'react'
import "./Products.css";
import Header from '../header/Header';

const Product = ({shopItems , handleAddItems}) => {
  return (
    <>
    <Header />
    <div className='items'>
        {shopItems.map((shopItems)=>(
            <div className='card'> 
            <div>
                <img className='item-image' src={shopItems.image} alt={shopItems.name} />
            </div>
            <div>
            <h3 className='item-name'>{shopItems.name}</h3>
            </div>
            <div className='item-price'>₹{shopItems.price}
            </div>
            <div><button className='item-add-button' onClick={()=> {handleAddItems(shopItems);alert("Item Added to Cart !")}}>Add to cart</button>
            </div>
            </div>
        ))
        }
    </div>
    </>
  );
        };



export default Product;