import { ShoppingCart } from "phosphor-react"
import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="bg-black h-[60px] sticky">
      <div className="flex justify-between items-center h-full max-w-[90%] md:max-w-[80%] m-auto text-white">
        <div className="">
          <Link to="/" className="text-white">
            GlassyStore
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
