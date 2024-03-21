"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart } from "../../redux/panierSlice";

export default function PanierComponent() {
  const [item, setItem] = useState("");
  const panier = useAppSelector((state: any) => state.panier.items);
  const dispatch = useAppDispatch();

  console.log("Articles dans le panier:", panier);

  return (
    <div>
      <h2>Mon Panier</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Ajoute un article"
      />
      <button onClick={() => dispatch(addToCart(1))}>Ajouter</button>
      <ul>
        {panier.map((article: string, index: number) => (
          <li key={index}>
            {article}{" "}
            <button onClick={() => dispatch(removeFromCart(1))}>Retirer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
