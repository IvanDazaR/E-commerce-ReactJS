import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductOpen, setIsProductOpen] = useState(false);

    const openProductDetail = () => setIsProductOpen(true)
    const closeProductDetail = () => setIsProductOpen(false)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            isProductOpen,
            setCount,
            openProductDetail,
            closeProductDetail,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}