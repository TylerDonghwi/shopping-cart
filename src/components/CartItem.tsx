import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    if (item == null) return null

    return (
        <div className="m-2 flex flex-row items-center justify-between">
            <div className="flex justify-center items-center">
                <img src={item.imgUrl} alt={item.name} className="w-[125px] h-[75px] object-cover" />
                <div className="m-2">
                    <div>
                        {item.name} <span className="text-slate-500 text-[0.625rem]">x{quantity}</span>
                    </div>
                    <div className="text-slate-500 text-[0.75rem]">
                        {formatCurrency(item.price)}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="right-[-100px]">
                    {formatCurrency(item.price * quantity)}
                </div>
                <button className="ml-2 border w-8 h-8 rounded shadow-sm text-red-600" onClick={() => removeFromCart(item.id)}>&times;</button>
            </div>
        </div>
    )
}
