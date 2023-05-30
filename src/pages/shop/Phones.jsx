import React, { useContext } from "react"
import { PhonesBrand } from "../../product"
import { ShopContext } from "../../context/shop-context"

export const Phones = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[90%] lg:max-w-[70%] m-auto">
        {PhonesBrand.map((product) => {
          // console.log(products);
          const { id, productName, price, productImage } = product
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
                  Add to Cart {cartAmount > 8 && <>({cartAmount})</>}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
