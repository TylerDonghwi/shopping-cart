import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart } = useShoppingCart()

    return (
        <>
            <div className={"fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-40 pointer-events-none transition-all duration-200 " + (isOpen ? 'visible' : 'hidden')}>
            </div>
            <div className={"fixed h-[100%] top-0 bg-white shadow-md w-[300px] transition-all duration-500 " + (isOpen ? 'right-0' : 'right-[-300px]')}>
                <div className="flex justify-between items-center">
                    <div className="text-lg m-2">Cart</div>
                    <FontAwesomeIcon className="m-2" onClick={closeCart} icon={faX}></FontAwesomeIcon>
                </div>


            </div>
        </>


    )
}
