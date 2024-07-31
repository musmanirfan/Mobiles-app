"use client"

import { useState } from "react";

type cata = {
    title: string[];
    filterProduct: (category: string) => void;
};

export default function Catogeries({ title, filterProduct }: cata) {
    const handleCategoryClick = (category: string) => {
        filterProduct(category);
    };

    return (
        <>
            <div className="flex justify-center mb-4">
                {
                    title.map((category, i) => (
                        <button key={category + i} className="border-2 border-gray-950 px-5 py-1 mx-2 rounded hover:bg-gray-200" onClick={() => handleCategoryClick(category)}>
                            {category}
                        </button>
                    ))
                }
            </div>
        </>
    )
}
