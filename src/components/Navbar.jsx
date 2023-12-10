import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from './shoppingcardcontext/ShoppingCardContext'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartList } = useCart()

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between ">
      <ul className="flex">
        <li className="ml-4 hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-4 hover:text-gray-300">
          <Link to="/mylist">MyList</Link>
        </li>
        <li className="ml-4 hover:text-gray-300" onClick={toggleCart}>
          Shopping Cart
          {isCartOpen && (
            <div className=" bg-white rounded-md">
              {cartList.length > 0 ? (
                cartList.map((item) => (
                  <div key={item.id} className="flex items-center px-4 py-2">
                    <img src={item.image} alt={item.title} className="w-10" />
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-700">
                  {/*TODO Icon hinzufügen */}
                  Dein Warenkorb ist leer.
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
