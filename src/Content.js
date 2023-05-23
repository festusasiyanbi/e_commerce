import ItemList from './ItemList';
import { useContext, useEffect, useState } from 'react';
import DataContext from './context/DataProvider';

const Content = () => {
  const { 
    items, setItems, isLoading, setIsLoading, fetchError, setFetchError
  } = useContext(DataContext);
  const [active, setActive] = useState(false);
 
  const fetchItems = async (category) => {
    const url = 'https://fakestoreapi.com/products';
    try {
      const response = await fetch(url);
      const data = await response.json()
      console.log(data)
      setItems(data)
      setIsLoading(true);
      setActive(category)
    } catch(error) {
        setFetchError("There is an error: ", error);
        setItems([]);
    } finally {
       setTimeout(() => setIsLoading(false), 2000);
    }
}
    useEffect(() => {
        fetchItems("all");
    }, [])


  const fetchCategory = async (category) => {
    setActive(false)
    const url = `https://fakestoreapi.com/products/category/${category}`;
    try {
      const response = await fetch(url)
      const data = await response.json()
      setItems(data)
      setIsLoading(true);
      setActive(category);
    } catch(error) {
        setFetchError(`${error.message}`);
        setItems([]);
    } finally {
        setTimeout(() => setIsLoading(false), 2000)
    }
  }
  return (
    <>
    <div className='Content'>
        <section className='section'>
            <nav className='aside'>
                <h4> my shopper account</h4>
                <p>Orders</p>
                <p>Pending Reveiews</p>
                <p>Shopper Coupon</p>
                <h4> our categories</h4>
                <p onClick={() => fetchItems("all")}>All categories</p>
                <p onClick={() => fetchCategory("electronics")}>Electronics </p>
                <p onClick={() => fetchCategory("jewelery")}>Jewelries</p>
                <p onClick={() => fetchCategory("men's clothing")}>Men's Fashion </p>
                <p onClick={() => fetchCategory("women's clothing")}>Women's Fashion </p>
                <span> Live help </span>
            </nav>

            <div className='article'>
              <div className='shop-now'>
                <div className='shop-now-container'>
                  <h2>Discover Our Latest Products</h2>
                  <p> Shopper is your #1 online shopping mall for everything you need. Start shopping now</p>
                  <button style={{ color: 'white', fontWeight: '700'}}>Shop now</button>
                </div>
              </div>
              <div className='categories'>
              <button className={ active === "all" ? 'active' : null} onClick={() => fetchItems("all")}> All</button>
              <button className={ active === "electronics" ? 'active' : null} onClick={() => fetchCategory("electronics")}> Electronics</button>
              <button className={ active === "jewelery" ? 'active' : null} onClick={() => fetchCategory("jewelery")}> Jewelry</button>
              <button className={ active === "men's clothing" ? 'active' : null} onClick={() => fetchCategory("men's clothing")}> Men's clothing</button>
              <button className={ active === "women's clothing" ? 'active' : null} onClick={() => fetchCategory("women's clothing")}> Women's clothing</button>
              </div>
              {isLoading && <p className='statusMsg'> Loading items...</p>}
              {fetchError && <p className='statusMsg' style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
              {!isLoading && !fetchError && <div className='displayItems'>
                {items.map(item => (
                    <ItemList key={item.id} item={item}/>
                ))}
            </div>
            }
            </div>
        </section>
    </div>
    </>
  )
}

export default Content;
