import { createContext, useContext, useState } from "react";

// Context erstellen
const MyListContext = createContext();

// Provider
export const MyListProvider = ( {children}) => {
  const [myList, setMyList] = useState([]);

  // Funktion um Produkt zur Liste hinzuzufügen
  const addToMyList = (product) => {
    setMyList((prevList) => [...prevList, product]);
  };

  return (
    <MyListContext.Provider value={{myList, addToMyList}}>
      {children}
    </MyListContext.Provider>
  )
}

// Custom Hook um den Context zu verwenden
export const useMyList = () => useContext(MyListContext);