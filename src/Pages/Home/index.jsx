import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, setSearchByTitle, searchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {

    if (filteredItems?.length > 0) {
      return (filteredItems?.map(item => (<Card key={item.id} data={item} />)))
    } else {
      return (
        <div> We don't have anything</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-2'>
        <h1 className='text-xl font-bold'>Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search Products"
        className='border rounded-lg w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        { renderView() }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home