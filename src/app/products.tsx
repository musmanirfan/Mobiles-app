import Product from "./Product";
import { ProductItemType } from "./productItemType";


type productType = {
    productsList: ProductItemType[];
}

export default function Products({ productsList }: productType) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           { productsList.map(({id, name, price, categery})=>(
            <Product
                key={name + id}
                id={id}
                name={name}
                price={price}
                categery={categery}
            />
            ))}
        </div>
    )
}