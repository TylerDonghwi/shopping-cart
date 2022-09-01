import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar() {

    const [path, setPath] = useState('/')

    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <div className="sticky bg-white shadow-md flex flex-row items-center h-[4.5rem]">
            <>
                <Link className='w-[80px] text-center' to="/">
                    <div onClick={() => setPath('/')}>Home</div>
                    {path === '/' ? <hr className='relative left-[15px] top-[1.5rem] border-blue-500 w-[50px]'></hr> : null}
                </Link>
                <Link className='w-[80px] text-center' to="/store">
                    <div onClick={() => setPath('/store')}>Store</div>
                    {path === '/store' ? <hr className='relative left-[15px] top-[1.5rem] border-blue-500 w-[50px]'></hr> : null}
                </Link>
                <Link className='w-[80px] text-center' to="/about">
                    <div onClick={() => setPath('/about')}>About</div>
                    {path === '/about' ? <hr className='relative left-[15px] top-[1.5rem] border-blue-500 w-[50px]'></hr> : null}
                </Link>
            </>
            {cartQuantity > 0 && (
                <button
                    className='relative ml-auto h-12 right-[0.625rem] w-12 bg-white border rounded flex justify-center items-center hover:bg-slate-50 active:bg-slate-100 transition-all duration-200'
                    onClick={openCart}
                >
                    <FontAwesomeIcon className='text-blue-500 h-[18px]' icon={faCartShopping}></FontAwesomeIcon>
                    <div className='absolute rounded-full bg-red-500 flex justify-center items-center text-white h-5 w-5 right-[-5px] bottom-[-5px] text-[14px]'>
                        {cartQuantity}
                    </div>
                </button>
            )}

        </div>
    )
}
