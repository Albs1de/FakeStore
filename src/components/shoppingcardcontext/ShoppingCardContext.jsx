import { createContext, useContext, useState } from 'react'

//Context erstellen
const CartContext = createContext()

//Provider
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  //Fügt Produkte zum Warenkorb hinzu
  const addToCart = (product) => {
    {
      /*TODO Bedingung hinzufügen */
    }
    // if product is in cartList, then dont add it but add the price + price
    const isProductInCart = cartList.find(
      (products) => products.id === product.id
    )
    if (isProductInCart) {
      setCartList((prevList) =>
        prevList.map((item) =>
          item.id === product.id
            ? { ...item, price: item.price + product.price }
            : item
        )
      )
    } else {
      setCartList((prevList) => [...prevList, product])
    }
  }

  //Löscht Produkt aus dem Warenkorb
  const deleteFromCart = (product) => {
    const newCartList = cartList.filter((element) => element.id !== product.id)
    setCartList(newCartList)
  }

  // Context-Werte bereitstellen
  return (
    <CartContext.Provider value={{ cartList, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook für den Zugriff auf den Cart-Kontext
export const useCart = () => useContext(CartContext)
