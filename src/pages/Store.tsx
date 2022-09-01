import storeItems from '../data/items.json'
import Storeitem from '../components/Storeitem'

export default function Store() {
    return (
        <>
            <h1>Store</h1>
            <div className='grid sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3'>
                {storeItems.map(item => (

                    <div><Storeitem {...item} /></div>
                ))}

            </div>

        </>
    )
}
