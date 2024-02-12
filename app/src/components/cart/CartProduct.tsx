

import { MdDelete } from "react-icons/md";
import { cartProduct } from "../../props";

export interface CartProductProps{
    cp:cartProduct;
    deleteCartProduct:(cp:cartProduct)=>void;
}

const CartProduct = ({cp,deleteCartProduct}:CartProductProps) => {
    
  return (
    
    <div className="card mb-3" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4 pt-1">
      <img src={cp.image[0]} className="img-fluid rounded-start pt-3 max-image-size" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body pe-0">
        <div className="d-flex justify-content-between align-items-center mb-0 pb-0">
          <h5 className="card-title mb-0">{cp.title}</h5>
          
          <button type="button" className="btn btn-lg pe-2 pb-0 mb-0 pt-0 ps-2" onClick={()=>deleteCartProduct(cp)}><MdDelete/></button>
        </div >
        <div className="d-flex justify-content-around">
            <p className="card-text p-0 m-0"><small className="text-body-secondary">Qt:{cp.quantity} </small></p>
            <p className="card-text p-0 m-0"><small className="text-body-secondary">Price: {cp.price}</small></p>
        </div>
        
      </div>
      
    </div>
  </div>
</div>
  )
}

export default CartProduct