import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    return (

        <div className="fixed w-[100%] bg-white shadow-md flex flex-row items-center py-5">
            <>
                <Link className='w-[80px] text-center' to="/">
                    Home
                </Link>
                <Link className='w-[80px] text-center' to="/store">
                    Store
                </Link>
                <Link className='w-[80px] text-center' to="/about">
                    About
                </Link>
            </>

            <button className='fixed right-2 h-12 w-12 bg-white border rounded flex justify-center items-center hover:bg-slate-50 active:bg-slate-100 transition-all duration-200'>
                <FontAwesomeIcon className='text-blue-500 h-[18px]' icon={faCartShopping}></FontAwesomeIcon>
                <div className='absolute rounded-full bg-red-500 flex justify-center items-center text-white h-5 w-5 right-[-5px] bottom-[-5px] text-[14px]'>3</div>
            </button>
        </div>



    )
}
