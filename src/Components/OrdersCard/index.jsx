import { ChevronRightIcon, CurrencyDollarIcon, CalendarDaysIcon, ShoppingCartIcon  } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const { date,totalProducts, totalPrice } = props;
    // console.log(date.toString())
    return (
        <div className='flex  gap-5 justify-between items-center mb-3 border rounded-lg p-3 w-80'>
            <div className='flex gap-1 items-center justify-center'>
                <ShoppingCartIcon className='h-6 w-6 text-black' />
                <p><span>{totalProducts}</span></p>
            </div>

            <div className='flex gap-1 items-center justify-center'>
                <CalendarDaysIcon className='h-6 w-6 text-black' />
                <p><span>{date}</span></p>
            </div>

            <div className='flex gap-1 items-center justify-center'>
                <CurrencyDollarIcon className='h-6 w-6 text-black' />
                <p><span>{totalPrice} </span></p>
                <ChevronRightIcon className='h-6 w-6 text-black'/>
            </div>
        </div>
    );
}
export default OrdersCard;