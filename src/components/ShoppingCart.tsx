import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import CartItem from "./CartItem"
import storeItems from '../data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <>
            <div className={"fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-40 transition-all duration-200 " + (isOpen ? 'visible' : 'hidden')}></div>
            <div className={"fixed h-[100%] top-0 bg-white shadow-md  w-[400px] transition-all duration-700 " + (isOpen ? 'right-0' : 'right-[-400px]')}>
                <div className="flex justify-between items-center">
                    <div className="text-lg m-2">Cart</div>
                    <span className="m-2 text-[2rem]" onClick={closeCart} >&times;</span>
                </div>
                <div>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="mr-2 float-right overflow-hidden text-lg font-bold">
                    Total {" "}{formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
                </div>
            </div>
        </>


    )
}
