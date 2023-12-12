import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from './shoppingcardcontext/ShoppingCardContext'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartList, totalPrice } = useCart()

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
        <li className="ml-8 hover:text-gray-300 " onClick={toggleCart}>
          Shopping Cart
          {isCartOpen && (
            <div className=" bg-white text-black rounded-md absolute right-0 w-full">
              {/*TODO wenn gleiches Element, dann nur 1x anzeigen und Anzahl aufzählen */}
              {cartList.length > 0 ? (
                cartList.map((item) => (
                  <div
                    key={item.id}
                    className=" flex items-center px-4 py-2 m-2"
                  >
                    <img src={item.image} alt={item.title} className="w-10" />
                    <p className="ml-4 text-sm">{item.title}</p>
                    <p className="ml-24 font-bold">{item.price}€</p>
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-700">
                  {/*TODO Icon hinzufügen */}
                  Dein Warenkorb ist leer.
                </div>
              )}
              <div className="bg-black text-white">
                <p>Gesamtpreis: {totalPrice}</p>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
