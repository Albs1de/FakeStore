import { useState, useEffect } from 'react'
import Card from './Card'
const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  //TODO! Icon oder Bild einfügen für den Ladeprozess
  if (!data) return <div>Loading...</div>

  const handleSortChange = (e) => {
    const sortValue = e.target.value
    let sortedData

    switch (sortValue) {
      case 'preisAbs':
        sortedData = [...data].sort((a, b) => b.price - a.price)
        break
      case 'preisAuf':
        sortedData = [...data].sort((a, b) => a.price - b.price)
        break
      case 'alphabetischAbs':
        sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'alphabetischAuf':
        sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        sortedData = [...data]
    }
    setData(sortedData)
  }

  return (
    <div className="bg-slate-50">
      <select defaultValue="defaultSort" onChange={handleSortChange}>
        {/*Icons für jede Sortierart einfügen und visuell ansprechender machen */}
        <option value="defaultSort">Sortieren nach...</option>
        <option value="preisAbs">Preis: Absteigend</option>
        <option value="preisAuf">Preis: Aufsteigend</option>
        <option value="alphabetischAbs">Alphabetisch: Absteigend</option>
        <option value="alphabetischAuf">Alphabetisch: Aufsteigend</option>
      </select>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  )
}

export default Home
