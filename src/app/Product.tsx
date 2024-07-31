import { ProductItemType } from "./productItemType";



export default function Product( {id, name, price, categery}: ProductItemType) {
    return (
        <>
            <div className="border p-4 mb-4 rounded shadow-sm">
                <p className="text-gray-700">ID:{id}</p>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-700">Price: ${price}</p>
                <p className="text-gray-700">Category: {categery}</p>
            </div>
        </>
    )
}