import { createContext, useContext, useState } from 'react'

// Context erstellen
const MyListContext = createContext()

// Provider
export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([])

  // Funktion um Produkt zur Liste hinzuzufügen
  const addToMyList = (product) => {
    if (!myList.some((item) => item.id === product.id)) {
      setMyList((prevList) => [...prevList, product])
    }
  }
  // Funktion um Produkt aus der Liste zu entfernen
  const deleteFromMyList = (product) => {
    setMyList((prevList) => prevList.filter((item) => item.id !== product.id))
  }

  return (
    <MyListContext.Provider value={{ myList, addToMyList, deleteFromMyList }}>
      {children}
    </MyListContext.Provider>
  )
}

// Custom Hook um den Context zu verwenden
export const useMyList = () => useContext(MyListContext)
