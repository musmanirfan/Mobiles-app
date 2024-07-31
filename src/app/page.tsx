"use client"

import { useState } from "react";
import Catogeries from "./catogeries";
import Products from "./products";
import { ProductItemType } from "./productItemType";

const products: ProductItemType[] = [
    { id: 1, name: "Iphone 15", price: 25000, categery: "IPhone" },
    { id: 2, name: "S23 Ultra", price: 25000, categery: "SamSung" },
    { id: 3, name: "Hot 11", price: 26000, categery: "Infinix" },
    { id: 4, name: "Pad", price: 22000, categery: "IPad" }
];

export default function Home() {
    const [filteredProd, setFilteredProd] = useState(products);
    const [categList, setCategList] = useState(["All", "IPhone", "SamSung", "Infinix", "IPad"]);

    const filterProduct = (category: string) => {
        if (category === "All") {
            setFilteredProd(products);
        } else {
            const filtered = products.filter(product => product.categery === category);
            setFilteredProd(filtered);
        }
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl text-center mb-4">Product List</h1>
                <Catogeries title={categList} filterProduct={filterProduct} />
                <Products productsList={filteredProd} />
            </div>
        </>
    );
}
