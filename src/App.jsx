import './App.css'
import Home from './components/Home'
import MyList from './components/MyList'
import Navbar from './components/Navbar'
import { MyListProvider } from './components/ProductListContext'

function App() {
  return (
    <>
      <Navbar />
      <MyListProvider>
        <Home />
        <MyList />
      </MyListProvider>
    </>
  )
}

export default App
