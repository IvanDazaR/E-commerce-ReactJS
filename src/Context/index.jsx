import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account');
  const signOutInLocalStorage = localStorage.getItem('sign-out');

  let parsedAccount
  let parsedSignOut

  if(!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }

  if(!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }


}

export const ShoppingCartProvider = ({ children }) => {
    // My Account
    const [account, setAccount] = useState({});

    //Sign out
    const [signOut, setSignOut] = useState(false);

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

    // // Search by Category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

      const filterByTitle = (items, searchByTitle) => {
          return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
      }
      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE'){
            return filterByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
          }
      
          if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
          }
      
          if (!searchType) {
            return items
          }
      }
      

    
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }, [items, searchByTitle, searchByCategory])



    return (
        <ShoppingCartContext.Provider value={{
            items,
            order, 
            count,
            account,
            signOut,
            cartProducts,
            searchByTitle, 
            isProductOpen,
            filteredItems, 
            productToShow,
            searchByCategory, 
            isCheckoutSideMenuOpen,
            setItems,
            setOrder,
            setCount,
            setAccount,
            setSignOut,
            setCartProducts,
            setFilteredItems,
            setProductToShow,
            setSearchByTitle,
            openProductDetail,
            closeProductDetail,
            setSearchByCategory,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}