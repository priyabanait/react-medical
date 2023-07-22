import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/Cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.stock * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <div className='article'>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt='' />
                        <p>{item.title}</p>
                        <p>{ }</p>
                        <span className='price'> Quantity:{item.quantity-1}</span>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.stock}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span className='price'>Rs-{item.price}</span>

                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Amount</span>
            <span>Rs - {price}</span>
        </div>
    </div>
  )
}

export default Cart