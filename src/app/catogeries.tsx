"use client"

import { useState } from "react";

type cata = {
    title: string[];
};

export default function Catogeries({ title }: cata) {
    const catogery = (catogery: string) => {
        console.log(catogery);
    }
    return (
        <>
            <div className="flex justify-center mb-4">
                {
                    title.map((catoger, i) => (
                        <button className="border-2 border-gray-950 px-5 py-1 mx-2 rounded hover:bg-gray-200" onClick={() => { catogery(catoger) }}>{catoger}</button>
                    ))
                }

            </div>
        </>
    )
}