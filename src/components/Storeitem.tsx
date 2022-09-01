import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function Storeitem({ id, name, price, imgUrl }: StoreItemProps) {
    return (
        <div className='m-2 shadow-md rounded-md'>
            <img alt={name} src={imgUrl} className='rounded-tl-md rounded-tr-md h-[200px] w-[100%] object-cover' />
            <div className='flex flex-col'>
                <div className='p-2 flex flex-row justify-between align-baseline mb-4'>
                    <span className='text-lg flex flex-wrap'>{name}</span>
                    <span className='ml-2 text-slate-500'>{formatCurrency(price)}</span>
                </div>
            </div>
        </div>
    )
}
