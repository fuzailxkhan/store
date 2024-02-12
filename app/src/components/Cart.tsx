

import {cartProduct} from "../props";
import "./cart/Cart.css"
import CartProduct from "./cart/CartProduct";
import { FaCashRegister } from "react-icons/fa6";


interface CartProps {
    isOpen: boolean;
    toggleCart: () => void;
    lop:cartProduct[];
    deleteCartProduct:(cp:cartProduct)=>void;
  }


  

const Cart = ({isOpen,toggleCart,lop,deleteCartProduct}:CartProps) => {
  
  return (
    <div className={`cart-container ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h4 >Cart</h4>
        <button className="close-btn" onClick={toggleCart}>
          &times;
        </button>
      </div>
      <div className="cart-body">
        {lop.map(p=><CartProduct cp={p} deleteCartProduct={deleteCartProduct} key={p.id }/>)}
      </div>
      {lop.length>0 &&
      <div className="cart-footer d-flex align-items-center ">
        <p className="text flex-grow-1 pb-0 mb-0">Total {lop.reduce((acc,p)=>(p.price*p.quantity)+acc,0)}</p>
        <button className="btn btn-outline-dark btn-sm d-flex align-items-center"  data-bs-toggle="modal" data-bs-target="#checkoutModal" ><p className="m-0 p-0 ">Checkout </p><FaCashRegister className="ms-1"/></button>
      </div>}
      
      
    </div>
  )
}

export default Cart