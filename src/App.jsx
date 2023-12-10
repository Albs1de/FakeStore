import './App.css'
import Home from './components/Home'
import MyList from './components/MyList'
import Navbar from './components/Navbar'
import { CartProvider } from './components/shoppingcardcontext/ShoppingCardContext'
import { MyListProvider } from './components/ProductListContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CartProvider>
        <MyListProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
        </MyListProvider>
      </CartProvider>
    </Router>
  )
}

export default App
