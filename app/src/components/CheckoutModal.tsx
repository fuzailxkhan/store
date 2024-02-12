import { useEffect, useState } from "react";
import { cartProduct } from "../props"
import {FieldValues, useForm } from "react-hook-form";
import CheckoutModalCard from "./checkoutmodal/CheckoutModalCard"
import axios from "axios";
import { FaTruck } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";

interface checkoutModalProps{
    lopInCart:cartProduct[];
}
type order = {
    shipping: FieldValues;
    order: {pid:number,pq:number}[]
}

const CheckoutModal = ({lopInCart}:checkoutModalProps) => {

    const [checkoutClicked,setCheckoutClicked] = useState(false);
    const [orderDetails,setOrderDetails] = useState<order>();
    const {register,handleSubmit,reset,formState:{errors}} = useForm();
    const [confirmed,setConfirmed] = useState();
  
    useEffect(()=>{
      if(checkoutClicked)
        axios.post("http://localhost:3000/checkout",orderDetails)
        .then(res=>setConfirmed(res.data))
        .catch(err=>console.log(err))
        setCheckoutClicked(false);
    },[checkoutClicked])
  

    const handleHandleSubmit = (data:FieldValues) =>{
        const disposable : {pid:number,pq:number}[]=[];
        lopInCart.forEach(p=>{
            disposable.push({pid:p.id,pq:p.quantity})
        })
        setOrderDetails({shipping:data,order:disposable});
        setCheckoutClicked(true);
        console.log(orderDetails);
        reset();
    }

  return (
    <>
    
    <div>
        <div className="modal fade" id="checkoutModal" tabIndex={-1} aria-labelledby="checkoutModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                {confirmed=="Confirmed"?<div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="checkoutModalLabel">Order Confirmation</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body mt-5 pt-5 pb-5 mb-5">
                                <div className="mb-3 row ">
                                    <label htmlFor="inputName" className="form-label">{orderDetails?.shipping.inputName}  Your Order is {confirmed}. <PiShootingStar/></label>
                                    <label htmlFor="inputName" className="form-label">Thanks for Ordering!</label>
                                    <label htmlFor="inputName" className="form-label">We will email you shortly regarding your order.</label>
                                </div>
                            </div>
                            <div className="modal-footer d-flex">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                         </div>:
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="checkoutModalLabel">Shipping Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(data=>{handleHandleSubmit(data)})}>

                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input {...register("inputName",{required:true})} type="text" className="form-control" id="inputName" aria-describedby="nameHelp" />
                                {errors.name?.type=="required"&&<p>Please Fill Out all the Fields</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                <input {...register("inputEmail",{required:true})}type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                {errors.name?.type=="required"&&<p>Please Fill Out all the Fields</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputAddress" className="form-label">Shipping Address</label>
                                <input {...register("inputAddress",{required:true})} type="text" className="form-control" id="inputAddress" aria-describedby="addressHelp" />
                                <div id="addressHelp" className="form-text">Make sure to give a detailed Address.</div>
                                {errors.name?.type=="required"&&<p>Please Fill Out all the Fields</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputNumber" className="form-label">Contact Number</label>
                                <input {...register("inputNumber",{required:true})} type="tell" className="form-control" id="inputNumber" aria-describedby="numberHelp" />
                                <div id="numberHelp" className="form-text">Phone Number will be used to contact you.</div>
                                {errors.name?.type=="required"&&<p>Please Fill Out all the Fields</p>}
                            </div>
                            
                            <div className="mb-3 form-check">
                                <input type="checkbox" {...register("inputCOD",{required:true})} className="form-check-input" id="inputCOD" />
                                <label className="form-check-label" htmlFor="inputCOD">Cash on Delivery</label>
                                {errors.name?.type=="required"&&<p>Please Fill Out all the Fields</p>}
                            </div>
                            <div className="row border-top pt-3">
                                <h1 className="modal-title fs-5" id="checkoutModalLabel">Your Order</h1>
                                {lopInCart.map(p=><CheckoutModalCard key={p.id}cartProduct={p}/>)}
                            </div>
                            <div className="modal-footer d-flex">
                                <h1 className="modal-title fs-5 flex-grow-1" id="checkoutModalLabel">Total : {lopInCart.reduce((acc,p)=>(p.price*p.quantity)+acc,0)}/=</h1>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary ">Order <FaTruck /></button>
                            </div>
                        </form>
                        
                    </div>
                    
                    
                </div>}
            </div>
        </div>
    </div>
    </>
  )
}

export default CheckoutModal