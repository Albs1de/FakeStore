import { useMyList } from './ProductListContext'
import Card from './Card'
const MyList = () => {
  const { myList, deleteFromMyList } = useMyList()

  return (
    <div>
      {myList.map((item) => (
        <div key={item.id} className="flex">
          <Card {...item} />
          <button
            className="bg-white text-black"
            onClick={() => deleteFromMyList(item)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default MyList
