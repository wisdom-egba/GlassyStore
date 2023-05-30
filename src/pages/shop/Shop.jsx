import React, { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../product"
import "./shop.css"

const Shop = () => {
  return (
    <div className=" mt-12">
      <h1>Gadgets</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[90%] m-auto">
        {PRODUCTS.map((products) => {
          // console.log(products);
          const { id, productName, price, productImage } = products
          const { addToCart, cartItem } = useContext(ShopContext)

          const cartAmount = cartItem[id]
          return (
            <div
              className="flex flex-col justify-center items-center mt-4 pb-9"
              key={id}
            >
              <img src={productImage} alt="accessories" />
              <h3>{productName}</h3>
              <p>$ {price}</p>
              <div className="mt-3 md:mt-0">
                <button
                  className="heroBtn2 "
                  onClick={() => {
                    addToCart(id)
                    alert("item added to cart")
                  }}
                >
                  Add to Cart {cartAmount > 0 && <>({cartAmount})</>}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop
