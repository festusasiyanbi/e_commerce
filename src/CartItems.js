import { AiFillCaretUp, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItems = ({ cart, setCart }) => {

    const handleIncrement = (id) => {
        setCart((prevItems) => {
            const newItems = prevItems.map((item) => {
                if (item.id === id) {
                    return { 
                        ...item, 
                        quantity: isNaN(item.quantity) ? 2 : item.quantity + 1, };
                } else { return item; }
            });
            return newItems;
        });
    };

    const handleDecrement = (id) => {
        setCart((prevItems) => {    
            const newItems = prevItems.map((item) => {
            if (item.id === id) {
                return { 
                    ...item, 
                    quantity: isNaN(item.quantity) ? item.quantity - 1  : 0, }
            } else { return item; }
            });
            return newItems;
        });
    };

    const handleDelete = (id) => {
        const newItems = cart.filter(item => (item.id !== id));
        setCart(newItems)
    }
    

  return (
    <div className="cartItems">
        <span className='caret-up'><AiFillCaretUp /> </span>
      {cart.map(item => (
        <div className='cartitem' key={item.id}>
            <img src={item.image} width={70} height={70}/>
            <span className='decrement' onClick={() => handleDecrement(item.id)}><AiOutlineMinus /></span>
            <span className='itemcount'> {item.quantity ? item.quantity : 1}</span>
            <span className='increment' onClick={() => handleIncrement(item.id)}><AiOutlinePlus /></span>
            <button className='delete' onClick={() => handleDelete(item.id)}> Delete </button>
        </div>
      ))}
      <button className='checkout'> {cart.length ? "Checkout" : '' } </button>

    </div>
  )
}

export default CartItems;
