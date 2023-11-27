

const Card = ({id, title, price, description, category, image, rating}) => {

  return(
  
    <div id={id} className="card-container bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4">
      <img src={image} alt={title} className="w-32 h-32" />
      <h3 className="text-lg font-bold text-gray-800 px-4 pt-4">{title}</h3>
      <p>Preis: {price}€</p>
      <p>Kategorie: {category}</p>
      <p>{description}</p>
      <p>Rating : {rating.rate}</p>


    </div>
  )
}

export default Card;