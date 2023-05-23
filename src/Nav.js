import React, { useContext } from 'react';
import shopper from './shopper.png';
import { CiShoppingCart, CiUser } from 'react-icons/ci' 
import DataContext from './context/DataProvider';
import CartItems from './CartItems';
import Authentication from './Authentication';
import { Link } from 'react-router-dom';


const Nav = () => {
    const { showCart, setShowCart, cart, setCart, search, setSearch, showAuthentication, setShowAuthentication } = useContext(DataContext); 

    const toggleShowCart = () => {
      if (!showAuthentication) { 
        setShowCart(!showCart)
      } else {
        setShowAuthentication(false)
        setShowCart(!showCart) 
      }
    }
    const toggleAuthentication = () => {
      if (!showCart) { 
        setShowAuthentication(!showAuthentication) 
      } else {
        setShowCart(false)
        setShowAuthentication(!showAuthentication) 
      }
    }

  return (
    <div>
      <nav className='Nav'>
        <Link to="/"><img src={shopper} alt='shopper logo' width={100} height={40} /> </Link>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <input 
            id='search'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search item'
          />
        </form>
       <div className='displayCart'>
       <div className='svg'>
          <button onClick={toggleShowCart}><CiShoppingCart /></button>
          <span id='itemcount'> {cart.length} </span>
          <button onClick={toggleAuthentication}><CiUser /></button>
        </div>
        { showCart && cart.length ? <CartItems cart={cart} setCart={setCart} /> : setShowCart(false) }
        {showAuthentication && <Authentication showAuthentication={showAuthentication} setShowAuthentication={setShowAuthentication}/>}
       </div>
      </nav>
    </div>
  )
}

export default Nav;
