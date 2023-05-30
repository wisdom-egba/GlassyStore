import React, { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../product"
import CartList from "./CartList"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext)
  const Amount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1 className="hello">Cart Items</h1>
      </div>
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return (
              <div>
                <CartList data={product} />
              </div>
            )
          }
        })}
      </div>
      {Amount == 0 ? (
        <div className="flex flex-col h-screen justify-center items-center">
          <h1>No Item In Cart</h1>
          <button className="heroBtn2" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-9">
          <h1 className="text-center my-14">
            Sum-total of Items in Cart: ${Amount}
          </h1>
          <div className="flex gap-6">
            <button className="heroBtn2" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button className="heroBtn2">CheckOut</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
