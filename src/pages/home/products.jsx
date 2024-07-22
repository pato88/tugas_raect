import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (
        <div >
            <img class="" src={productImage} />
            <div >
                <p>
                    <b class="font-bold text-center">{productName}</b>
                </p>
                <p> Rp.{price}</p>
            </div>
            <button class="bg-slate-500 rounded-lg size-50 text-sky-100" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
