import {product, cartProduct } from '../props';


export const handleAddToCart = (product: product,cartProducts:cartProduct[]) => {
    const existingProduct = cartProducts.find(item => item.id === product.id);
    if (existingProduct) {
        return(cartProducts.map(item =>item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
        return([...cartProducts, { ...product, quantity: 1 }]);
    }
};

export const handleDeleteCartProduct = (cp:cartProduct,cartProducts:cartProduct[])=>{
  
  if (cp.quantity>1) {
      return(cartProducts.map(item =>item.id === cp.id ? { ...item, quantity: item.quantity - 1 } : item));
  } else {
      return(cartProducts.filter(p=>cp.id!=p.id));
  }

}