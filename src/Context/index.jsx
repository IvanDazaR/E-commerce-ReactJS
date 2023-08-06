import { createContext, useState } from "react";

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


    return (
        <ShoppingCartContext.Provider value={{
            order, 
            count,
            cartProducts,
            isProductOpen,
            productToShow,
            isCheckoutSideMenuOpen,
            setOrder,
            setCount,
            setCartProducts,
            setProductToShow,
            openProductDetail,
            closeProductDetail,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}