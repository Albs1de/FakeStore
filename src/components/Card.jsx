import { useMyList } from './ProductListContext'
import { useCart } from './shoppingcardcontext/ShoppingCardContext'
const Card = ({ id, title, price, description, category, image, rating }) => {
  const { addToMyList, myList } = useMyList()
  const { addToCart } = useCart()
  // onCick Funktion für den Button, fügt den aktuellen Card zur MyList hinzu
  const handleAddToMyList = () => {
    const item = { id, title, price, description, category, image, rating }
    addToMyList(item)
  }
  const isItemInMyList = myList.some((item) => item.id === id)
  return (
    <div
      id={id}
      className="card-container bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4"
    >
      <img src={image} alt={title} className="w-32 h-32" />
      <h3 className="text-lg font-bold text-blue px-4 pt-4">{title}</h3>
      <p>Preis: {price}€</p>
      <p>Kategorie: {category}</p>
      <p>{description}</p>
      <p>Rating : {rating.rate}</p>
      <button
        className="bg-blue-700 text-white font-bold hover:bg-white hover:text-blue-700 hover:border py-2 px-4 rounded m-4"
        onClick={() =>
          addToCart({ id, title, description, category, price, image })
        }
      >
        Kaufen
      </button>

      {/* FIXME! Icon einsetzen anstatt Text einfügen! */}
      {!isItemInMyList && (
        <button
          className="bg-teal-900 text-white font-bold py-2 px-4 rounded m-4"
          onClick={handleAddToMyList}
          disabled={isItemInMyList}
        >
          Zur Liste hinzufügen
        </button>
      )}
    </div>
  )
}

export default Card
