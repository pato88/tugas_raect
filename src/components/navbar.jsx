import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  return (
    <div class="items-center flex justify-between bg-slate-600 space-x-5 text-zinc-100 px-4">
      <div>
        <h1 class="text-4xl font-extrabold">Amar Technology</h1>
      </div>
      <div class="flex gap-8 p-4 ">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
