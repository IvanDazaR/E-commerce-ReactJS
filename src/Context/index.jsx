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

    // Search Products
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

    return (
        <ShoppingCartContext.Provider value={{
            items,
            order, 
            count,
            cartProducts,
            searchByTitle, 
            isProductOpen,
            productToShow,
            isCheckoutSideMenuOpen,
            setItems,
            setOrder,
            setCount,
            setCartProducts,
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