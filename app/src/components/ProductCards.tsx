import {product} from "../props"
import ProductCard from "./productcards/ProductCard"



export interface productsprops {
    lop:product[];
    addToCart:(product:product)=>void;
    onClick: (product:product)=>void;
}



const ProductCards = ({lop,addToCart,onClick}:productsprops) => {
  return (
    <div className="mb-3 p-3 bg-dark">
        <div className="row row-cols-1 row-cols-md-6 g-4">
                {lop.map(p=><div className="col" key = {p.id}><ProductCard key={p.id} addToCart={addToCart} product={p} onClick={onClick}/></div>)}
        </div>
    </div>
  )
}

export default ProductCards