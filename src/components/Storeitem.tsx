import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function Storeitem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className='m-2 border shadow-md rounded-md'>
            <img alt={name} src={imgUrl} className='rounded-tl-md rounded-tr-md h-[200px] w-[100%] object-cover' />
            <div className='flex flex-col'>
                <div className='p-2 flex flex-row justify-between align-baseline'>
                    <span className='text-lg flex flex-wrap'>{name}</span>
                    <span className='text-slate-500'>{formatCurrency(price)}</span>
                </div>
            </div>
            <div className='mt-auto w-[100%]'>
                {quantity === 0 ? (
                    <button className='relative text-white rounded-sm p-1 bg-blue-500 w-[calc(100%-1rem)] m-2 hover:bg-blue-600 active:bg-blue-700 transition-all duraction-100' onClick={() => increaseCartQuantity(id)}>
                        + Add To Cart
                    </button>
                ) : (
                    <div className='flex flex-col justify-center items-center m-2'>
                        <div className='flex flex-row justify-center items-center w-[100%] mb-2 [&>*]:mx-2 [&>button]:w-8'>
                            <button
                                className='relative text-white rounded-sm p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                                onClick={() => decreaseCartQuantity(id)}
                            >
                                -
                            </button>
                            <div>
                                <span className='text-lg'>{Math.ceil(quantity)}</span> in cart
                            </div>
                            <button
                                className='relative text-white rounded-sm p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                                onClick={() => increaseCartQuantity(id)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className='relative text-white rounded-sm p-1 bg-red-500 w-[25%]  hover:bg-red-600 active:bg-red-700 transition-all duraction-100'
                            onClick={() => removeFromCart(id)}
                        >
                            Remove
                        </button>
                    </div>)}
            </div>
        </div>
    )
}
