import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./products";

export const Home = () => {
    return (
        <div>
            {/* <div>
                <h1 class="text-4xl text-center font-bold">Amar Technology</h1>
            </div> */}

            <div class="grid grid-cols-4 items-end text-center gap-y-8 p-9">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}

