import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between ">
      <ul className="flex">
        <li className="ml-4 hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-4 hover:text-gray-300">
          <Link to="/mylist">MyList</Link>
        </li>
        <li className="ml-4 hover:text-gray-300">Shopping cart</li>
      </ul>
    </nav>
  )
}

export default Navbar
