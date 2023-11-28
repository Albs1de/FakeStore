import { useMyList } from './ProductListContext'

const Card = ({ id, title, price, description, category, image, rating }) => {
  const { addToMyList } = useMyList()

  // onCick Funktion für den Button, fügt den aktuellen Card zur MyList hinzu
  const handleAddToMyList = () => {
    const item = { id, title, price, description, category, image, rating }
    addToMyList(item)
  }
  return (
    <div
      id={id}
      className="card-container bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4"
    >
      <img src={image} alt={title} className="w-32 h-32" />
      <h3 className="text-lg font-bold text-blue px-4 pt-4">{title}</h3>
      <p>Price: {price}€</p>
      <p>Category: {category}</p>
      <p>{description}</p>
      <p>Rating : {rating.rate}</p>
      <button className="bg-blue-700 text-white font-bold hover:bg-white hover:text-blue-700 hover:border py-2 px-4 rounded m-4">
        Buy
      </button>

      {/* FIXME! Icon einsetzen anstatt Text einfügen! */}
      <button
        className="bg-teal-900 text-white font-bold py-2 px-4 rounded m-4"
        onClick={handleAddToMyList}
      >
        Add to Mylist
      </button>
    </div>
  )
}

export default Card
