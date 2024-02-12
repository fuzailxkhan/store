import {product} from "../../props";
import "./ProductCard.css";
import { IoIosCart } from "react-icons/io";
import { FiHeart } from "react-icons/fi";

export interface  ProductCardProps{
    product:product;
    addToCart:(product:product)=>void;
    onClick:(product:product)=>void;
}


const ProductCard = ({product,addToCart,onClick}:ProductCardProps) => {
  return (
    <div className="card h-100 w-10" onClick={()=>{onClick(product)}}  >
        <img src={product.image[0]} className="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" alt="..."/>
        <div className="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <h5 className="card-title" >{product.title}</h5>
            <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer d-flex">
            <small className="text-body-primary flex-grow-1 row align-items-center ps-2">Price  {product.price}</small>
            <button type="button" className="btn btn-outline-dark btn-sm" ><FiHeart /></button>
            <button type="button" className="btn btn-outline-dark btn-sm ms-2"  onClick={()=>addToCart(product)}><IoIosCart /></button>
        </div>
    </div>
  )
}

export default ProductCard