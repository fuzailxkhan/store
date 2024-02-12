import { cartProduct } from "../../props"
import "./CheckoutModalCard.css"

interface checkoutModalCardProps{
    cartProduct:cartProduct;
}

const CheckoutModalCard = ({cartProduct}:checkoutModalCardProps) => {
  return (

    
   
    <div className="card mb-3 p-0 m-0 ms-1 mt-2" style={{maxWidth: "220px",maxHeight:"200px"}}  >
        <div className="row g-0 p-0 m-0">
            <div className="col-md-4" style={{maxWidth: "65px",maxHeight:"65px"}}>
                <img src={cartProduct.image[0]} className="img-fluid rounded-start mt-3 ms-1"  alt="..."/>
            </div>
            <div className="col-md-8" style={{maxWidth: "120px"}}>
                <div className="card-body">
                    <h5 className="card-title fs-6 lh-1 mb-1" >{cartProduct.title}</h5>
                    <p className="card-text fs-6 lh-1 row">
                        <small className="text-body-secondary">Qt: {cartProduct.quantity}</small>
                        <small className="text-body-secondary">Price: {cartProduct.price}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default CheckoutModalCard