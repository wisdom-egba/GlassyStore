import React, { createContext, useState } from "react"
import { PRODUCTS } from "../product"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  const cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let Amount = 0
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        Amount += Math.round(cartItem[item] * itemInfo.price)
      }
    }
    return Amount
  }
  const deleteCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const handleChange = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }
  console.log(cartItem)
  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    handleChange,
    getTotalCartAmount,
    deleteCartItem,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
