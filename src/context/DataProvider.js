import React, { createContext, useState } from 'react'

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showAuthentication, setShowAuthentication] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const filteredItems = items.filter((item) => (item.title).toLowerCase().includes(search.toLowerCase()));
    
  return (
    <DataContext.Provider value={{
        items: filteredItems, setItems, search, cart, setCart,
        setSearch, isLoading, setIsLoading, showCart, setShowCart,
        fetchError, setFetchError, isLoggedIn, setIsLoggedIn,
        showAuthentication, setShowAuthentication
    }}>
      { children }
    </DataContext.Provider>
  )
}

export default DataContext;
