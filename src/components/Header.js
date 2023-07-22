
import '../styles/Header.css';
import React,{useContext} from 'react';
import context from '../context/context';
const Header = (props) => {
    const a=useContext(context);
  return (
    <header>
        <div className="nav_box">
            <div className="my_shop" onClick={()=>props.handleCart(false)}>
               {a.Heading}
            </div>
            <div className="cart" onClick={()=>props.handleCart(true)}>
                
                <span>
                    Your Cart <i className="fas fa-cart-plus"></i>
                </span>
                <span>{props.count}</span>
            </div>
        </div>
        
    </header>
  )
}

export default Header
