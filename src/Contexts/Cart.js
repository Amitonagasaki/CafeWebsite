import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [saveItem, setSaveItem] = useState([]);
  return (
    <CartContext.Provider
      value={{ itemsInCart, setItemsInCart, saveItem, setSaveItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
