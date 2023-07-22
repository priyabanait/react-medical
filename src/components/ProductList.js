import React from 'react';
import list from '../data';
import '../styles/ProductList.css';


const ProductList = ({handleClick}) => {
  return (
    <div>
       
        
    
    <section>
       
        {
            list.map((item)=>(
             <div  key={item.id}> 
              <div className="cards">
              <div className="image_box">
             
                  <img src={item.img} alt=' ' />
              </div>
              <div className="details">
                  <p>{item.title}</p>
                  <p>{item.Description}</p>
                  <p>Price - {item.price}Rs</p>
                 
                  <button onClick={()=>handleClick(item)} >Add to Cart</button>
              </div>
          </div>
          </div>
            ))
        }
    </section>
    </div>
  )
}

export default ProductList;