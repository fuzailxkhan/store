import { CiShoppingCart } from "react-icons/ci";
import {product} from "../props";
import Carousel from "./Carousel";

interface productModalProps{
    product:product;
    addToCart:(product:product)=>void;
}

const ProductModal = ({product,addToCart}:productModalProps) => {
  return (
    
    <div className="modal fade" id="exampleModal" role ="dialog"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{product?.title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <Carousel images={product?.image}/>
                <p >{product?.description}</p>
                
            </div>
            <div className="modal-footer d-flex ">
                <p className="flex-grow-1">Price: {product?.price}</p>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart <CiShoppingCart /></button>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductModal