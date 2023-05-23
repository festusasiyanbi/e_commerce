import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataProvider";


const Description = () => {
    const { id } = useParams();
    const [newItem, setNewItem] = useState(null);
    const [notification, setNotification] = useState('');
    const { setIsLoading, setFetchError, cart, setCart } = useContext(DataContext);


    const fetchItem = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      try {
        const response = await fetch(url)
        const data = await response.json()
        setNewItem(data);
        setIsLoading(true);
      } catch(error) {
        setFetchError(`Error: ${error.message}`);
      }
    }

    useEffect(() => {
        fetchItem();
    }, [])
    
  
    const handleAddToCart = (item) => {
      setCart([...cart, item]);
      setNotification("Item successfully added to cart");
      localStorage.setItem("store", JSON.stringify(item))
      setTimeout(() => {
        setNotification('');
      }, 3000)
    }

    const isItemInCart = (item) => {
      return cart.some(cartItem => cartItem.id === item.id);
    }
    
  return (
    <>
    <div className='description-card'>
      {notification && <p className="notification">{notification}</p> }
            {newItem && 
            <>
            <img src={newItem.image} alt={newItem.title} />
              <div className='item-description'> 
                  <p className='item-title'><b>Title:</b> {newItem.title}</p>
                  <p className='item-description'><b>Description:</b> {newItem.description}</p>
                  <p className='item-review'>{`Rating: ${newItem.rating?.count}`}</p>
                  <p className='item-price'><b>Price: </b> {newItem.price}</p>
              </div>
              <button 
                id="addtocart" 
                onClick={() => handleAddToCart(newItem)} 
                disabled={isItemInCart(newItem)}
                style={{ cursor: isItemInCart(newItem) ? 'not-allowed' : 'pointer' }}
              >
                {isItemInCart(newItem) ? "Item already exist in cart" : "Add to cart"}
              </button>
              </>
            }
          </div> 
          </>
  )
}

export default Description;
