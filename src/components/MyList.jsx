import { useMyList } from './ProductListContext'
import Card from './Card'

const MyList = () => {
  const { myList } = useMyList()

  return (
    <div>
      {myList.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}

export default MyList
