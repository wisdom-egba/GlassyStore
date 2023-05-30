import React, { useContext, useState } from "react"
import { ShopContext } from "../../context/shop-context"
const CartList = ({ data }) => {
  const { id, productName, price, productImage } = data
  // const increment = () => {
  //   setValue(value + 1)
  // }
  // const decrement = () => {
  //   if (value == 1) {
  //     return
  //   }
  //   setValue(value - 1)
  // }
  const { addToCart, removeFromCart, cartItem, handleChange, deleteCartItem } =
    useContext(ShopContext)
  return (
    <div className="flex justify-center mt-6">
      <div className="text-black max-w-[90%] m-auto md:w-[600px] md:h-[200px] flex justify-between items-center rounded-xl shadow-xl gap-9 px-3 py-3">
        <img
          className="flex w-[100px] md:w-[200px]"
          src={productImage}
          alt=""
        />
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-2 md:gap-5">
            <p className="">
              <b>{productName}</b>
            </p>
            <button
              className="heroBtn2 md:mt-3"
              onClick={() => deleteCartItem(id)}
            >
              Remove
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 md:gap-10">
            <p>{price}</p>
            <div className="flex md:gap-1">
              <button
                className="heroBtn"
                onClick={() => {
                  if (cartItem[id] == 1) {
                    return
                  }
                  removeFromCart(id)
                }}
              >
                -
              </button>
              <input
                type="text"
                className="outline-none border border-gray-300 w-8 text-center"
                value={cartItem[id]}
                onChange={(e) => handleChange(Number(e.target.value), id)}
              />
              <button className="heroBtn" onClick={() => addToCart(id)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList
