import { ChangeEvent } from "react"




interface navSearchProps{
  handleOnChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const NavSearch = ({handleOnChange}:navSearchProps) => {
  return (
    <div>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange}/>
            <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
    </div>
  )
}

export default NavSearch