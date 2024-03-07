
import { ChangeEvent, useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import ProductCards from './components/ProductCards'
import { ImCart } from "react-icons/im";


import Cart from './components/Cart';
import {product, cartProduct, responseProduct } from './props';
import axios from 'axios';
import { handleAddToCart,handleDeleteCartProduct } from './functions/cartFunctions';
import Home from './components/Home';
import ProductModal from './components/ProductModal';
import Alert from './components/Alert';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [cartOpen,setCartOpen] = useState(false);
  const [products,setProducts] = useState<product[]>([]);
  const [cartProducts,setCartProducts] = useState<cartProduct[]>([]);
  const [currentPage,setCurrentPage] = useState("Home");
  const [productModal,setProductModal] =useState<product>(products[0]);
  const [filteredProducts,setFilteredProducts] = useState<product[]>(); 
  const [searchGiven,setSearchGiven] = useState<boolean>(false);

  useEffect(()=>{
    const controller = new AbortController();
    
    axios.get('http://localhost:3000/products',{signal:controller.signal})    
        .then((response) => {
          response.data.forEach((element:responseProduct) => {
            const images = element.image.map((img) => {
              const base64String = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(img.data))));
              return `data:${img.type};base64,${base64String}`;
            });

            const disposableProduct = { ...element, image: images };
            setProducts((prevProducts) => [...prevProducts, disposableProduct]);
          });
        })
        .catch((error) => console.log(error.message));

      return () => controller.abort();
    }, []);

  const handleInputOnChange = (event:ChangeEvent<HTMLInputElement>) =>{
    const input:string = event.target.value;
    if(input.length === 0){setSearchGiven(false);setFilteredProducts([])}
    else{
      setSearchGiven(true);
      const arr = products.filter(p=>p.title.toLowerCase().includes(input.toLowerCase()));
      if(arr.length!=0){setFilteredProducts(arr)}
      else {setFilteredProducts([])};
    }
    
  }
  

  return (
    <>
     <div>
      <Navbar active={currentPage} setActive={(pageName)=>{setCurrentPage(pageName)}} handleOnChange={handleInputOnChange} />

      {currentPage=="Home"?<Home />:
      !searchGiven?<ProductCards addToCart={(p)=>{setCartProducts(handleAddToCart(p,cartProducts))}} lop={products} onClick={(product)=>setProductModal(product)}/>:
      filteredProducts&&
      filteredProducts?.length!=0?<ProductCards addToCart={(p)=>{setCartProducts(handleAddToCart(p,cartProducts))}} lop={filteredProducts} onClick={(product)=>setProductModal(product)}/>:
      <Alert alert="Product Not Found"/>}      

      <Cart deleteCartProduct={(p)=>{setCartProducts(handleDeleteCartProduct(p,cartProducts))}} isOpen={cartOpen} toggleCart={()=>setCartOpen(!cartOpen)} lop={cartProducts} />

      <div className="floating-btn" onClick={()=>setCartOpen(!cartOpen)}>
        <ImCart/><span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger fs-6" >
          {cartProducts.length>0&&cartProducts.reduce((acc,p)=>(p.quantity)+acc,0)}</span>
      </div>
     </div>
     <CheckoutModal lopInCart={cartProducts}/>
     <ProductModal product={productModal} addToCart={(p)=>{setCartProducts(handleAddToCart(p,cartProducts))}}/>
    </>
  )
}

export default App

