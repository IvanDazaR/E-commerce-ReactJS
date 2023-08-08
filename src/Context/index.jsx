import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductOpen, setIsProductOpen] = useState(false);
    const openProductDetail = () => setIsProductOpen(true)
    const closeProductDetail = () => setIsProductOpen(false)

      // Checkout Side Menu - Open/Close
      const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
      const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
      const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
    });
    // Shopping Cart - Add Products to cart
    const [cartProducts, setCartProducts] =  useState([]);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    // Filtered Items
    const [filteredItems, setFilteredItems] = useState(null);

    // Search Products
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
      }
      useEffect(()=> {
        if (searchByTitle)  setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle])


    return (
        <ShoppingCartContext.Provider value={{
            items,
            order, 
            count,
            cartProducts,
            searchByTitle, 
            isProductOpen,
            filteredItems, 
            productToShow,
            isCheckoutSideMenuOpen,
            setItems,
            setOrder,
            setCount,
            setCartProducts,
            setFilteredItems,
            setProductToShow,
            setSearchByTitle,
            openProductDetail,
            closeProductDetail,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}