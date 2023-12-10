import { createContext, useContext, useState } from 'react'

//Context erstellen
const CartContext = createContext()

//Provider
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])

  //Fügt Produkte zum Warenkorb hinzu
  const addToCart = (product) => {
    setCartList((prevList) => [...prevList, product])
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
