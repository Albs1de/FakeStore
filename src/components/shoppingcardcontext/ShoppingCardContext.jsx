import { createContext, useContext, useState, useEffect } from 'react'

//Context erstellen
const CartContext = createContext()

//Provider
export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  //Fügt Produkte zum Warenkorb hinzu
  const addToCart = (product) => {
    // if product is in cartList, then dont add it but add the price + price
    const isProductInCart = cartList.find(
      (products) => products.id === product.id
    )
    if (isProductInCart) {
      setCartList((prevList) =>
        prevList.map((item) =>
          item.id === product.id
            ? {
                ...item,
                price: parseFloat((item.price + product.price).toFixed(2)),
              }
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
  // Aktualisiert den Gesamtbetrag in totalprice abhängig von cartList
  useEffect(() => {
    const newTotalPrice = cartList.reduce(
      (sum, item) => parseFloat((sum + item.price).toFixed(2)),
      0
    )
    setTotalPrice(newTotalPrice)
  }, [cartList])

  // Context-Werte bereitstellen
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteFromCart, totalPrice, setTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook für den Zugriff auf den Cart-Kontext
export const useCart = () => useContext(CartContext)
