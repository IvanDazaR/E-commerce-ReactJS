import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductOpen, setIsProductOpen] = useState(false);
    const openProductDetail = () => setIsProductOpen(true)
    const closeProductDetail = () => setIsProductOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
    });
    return (
        <ShoppingCartContext.Provider value={{
            count,
            isProductOpen,
            productToShow,
            setCount,
            openProductDetail,
            closeProductDetail,
            setProductToShow,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}