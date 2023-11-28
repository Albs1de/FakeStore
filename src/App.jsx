import './App.css'
import Home from './components/Home'
import MyList from './components/MyList'
import Navbar from './components/Navbar'
import { MyListProvider } from './components/ProductListContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <MyListProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
        <Home />
        <MyList />
      </MyListProvider>
    </Router>
  )
}

export default App
