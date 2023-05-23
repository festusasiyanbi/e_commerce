import { Link } from "react-router-dom";

const ItemList = ({ item }) => {
  return (
    
          <div className='Item-Card'>
            <img src={item.image} alt={item.title} style={{
              width: '80%',
              height: '100px',
              objectFit: 'contain',
              marginBottom: '8px'
            }} />
            <Link 
              to={`/item/${item.id}`} 
              key={item.id} 
              style={{ textDecoration: 'none', color: 'black'}}
            >
              <div className='item-details'> 
                  <p className='item-title'>{(item.title).slice(0, 20)}...</p>
                  <p className='item-review'>{`Rating: ${item.rating.count}`}</p>
                  <p className='item-price'>{`$${item.price}`}</p>
              </div>
              </Link>
          </div>
  )
}

export default ItemList;
