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
      className="flex flex-col h-full card-container bg-slate-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4 px-4"
    >
      <img src={image} alt={title} className="w-32 h-32" />
      <h3 className="text-lg font-bold text-xl text-slate-950 leading-8 pt-3 pb-2 ">
        {title}
      </h3>
      <p className="text-slate-900 text-base leading-7 pb-1 ">
        <span className="font-bold">Kategorie: </span>
        <span className="text-slate-600 leading-5">{category}</span>
      </p>
      <p className="text-slate-900 text-base leading-6 pb-1 ">
        <span className="text-slate-600 ">{description}</span>
      </p>
      <p className="text-slate-900 text-base leading-7 pb-2 ">
        <span className="font-bold">Rating:</span> <span>{rating.rate}</span>
      </p>
      <p className="text-slate-900 text-lg leading-7 pb-2 ">
        <span className="font-bold">Preis:</span>{' '}
        <span className="text-tradewind font-bold">{price}€</span>
      </p>
      <div className="flex flex-row justify-between mt-auto px-2">
        <button
          className="bg-slate-500 hover:bg-slate-600 text-slate-50 focus:bg-slate-700 rounded  mb-4 px-5 h-10 flex-grow"
          onClick={() =>
            addToCart({ id, title, description, category, price, image })
          }
        >
          Kaufen
        </button>
        {/* FIXME! Icon einsetzen anstatt Text einfügen! */}
        {!isItemInMyList && (
          <button
            className="bg-teal-900 text-white  rounded ml-2  mb-4  h-10 flex-grow"
            onClick={handleAddToMyList}
            disabled={isItemInMyList}
          >
            Zur Liste hinzufügen
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
