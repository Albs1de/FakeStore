

const Card = ({id, title, price, description, category, image, rating}) => {

  return(
  
    <div id={id} className="card-container bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4">
      <img src={image} alt={title} className="w-32 h-32" />
      <h3 className="text-lg font-bold text-blue px-4 pt-4">{title}</h3>
      <p>Price: {price}€</p>
      <p>Category: {category}</p>
      <p>{description}</p>
      <p>Rating : {rating.rate}</p>
      <button className="bg-blue-700 text-white font-bold hover:bg-white hover:text-blue-700 hover:border py-2 px-4 rounded m-4">Buy</button>

    </div>
  )
}

export default Card;