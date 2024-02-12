import { ChangeEvent } from "react";
import NavSearch from "./navbar/NavSearch"
import "./navbar/Navbar.css"

interface navbarProps {
  active : string;
  setActive : (pageName:string)=>void
  handleOnChange:(event:ChangeEvent<HTMLInputElement>)=>void;
}

const navbar = ({active,setActive,handleOnChange}:navbarProps) => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand fs-5 fw-semibold" href="#">Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link fs-5 ${active === "Home" &&"active"}`}  onClick={()=>{setActive("Home")}} >Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link fs-5 ${active=="Products"&&"active"}`} onClick={()=>{setActive("Products")}} >Products</a>
          </li>
        </ul>
        <NavSearch handleOnChange={handleOnChange}/> 

      </div>
    </div>
  </nav></div>
  )
}

export default navbar