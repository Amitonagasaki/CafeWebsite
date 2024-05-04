import { useCart } from "../Contexts/Cart";

export default function CartList() {
  const { itemsInCart, setItemsInCart, saveItem, setSaveItem } = useCart();

  const incrementQty = (itemId) => {
    setItemsInCart((data) =>
      data.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (itemId) => {
    setItemsInCart((data) =>
      data.map((item) =>
        item.id=== itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (removeItem) => {
    setItemsInCart(itemsInCart.filter((item) => item !== removeItem));
  };

  const itemPrice = (quantity, price) => {
    // Ensure price is always a number
    const numericPrice = parseInt(price);
    

    if (isNaN(numericPrice)) {
      return 0;
    }
    return quantity* numericPrice;
  };
  

  const totalAmount = () => {
    return itemsInCart.reduce((accumulator, item) => {
      const price = parseFloat(item.price); // Convert price to a number
     

      return accumulator + (item.quantity * price); // Use the converted price
    }, 0);
  };
  
  // const saveForLater = (product) => {
  //   const itemSaved = saveItem.find((item) => item.id === product.id);
  //   if (!itemSaved) {
  //     setSaveItem((prevList) => [...prevList, { ...product, quantity: 1 }]);
  //   }
  //   console.log(itemSaved);
  // };

  const saveForLater = (product) => {
    if (itemsInCart.find((item) => item.id === product.id)) {
      setSaveItem((item) => [...item, product]);
      setItemsInCart((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const moveToCart = (product) => {
    setItemsInCart((item) => [...item, product]);
    setSaveItem((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <div className="cart-details">
        <h3 className="cart-length">
          Total Items In Cart: {itemsInCart.length}
        </h3>

        <h3 className="cart-total"> Total Cost: Rs. {totalAmount()} </h3>
      </div>
      <div className="cart-items">
        {itemsInCart.map((item) => (
          <div className="card" key={item.name}>
            <div className="cart-card">
              <div>
             
              </div>
              <div className="card-info flex flex-col ">
                <p className="card-brand">{item.name}</p>
                <small> {item.color}</small>
                <div className="flex flex-row card-price">
                  <p className="card-new-price">
                    {" "}
                   
                    ₹{itemPrice(item.quantity, item.price)}{" "}
                  
                  </p>
              
              
                </div>
              </div>
            </div>
            <div className="cart-fin">
              <button
                className="button inc-dec-button"
                onClick={() => incrementQty(item.id)}
              >
                {" "}
                +{" "}
              </button>
              <p>{item.quantity}</p>
              <button
                className="button inc-dec-button"
                onClick={() => decrementQty(item.id)}
              >
                {" "}
                -{" "}
              </button>
              <button
                className="cart-button"
                onClick={() => saveForLater(item)}
              >
                {" "}
                Save For later{" "}
              </button>
              <button className=" cart-button" onClick={() => removeItem(item)}>
                {" "}
                Remove{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>Save For Later</div>
      {saveItem.map((item) => (
        <div className="card" key={item.id}>
          <img className="card-img" src={item.image} alt="product"></img>
          <div className="card-info flex flex-col ">
            <p className="card-brand">{item.brand}</p>
            <small> {item.type}</small>
            <div className="flex flex-row card-price">
              <p className="card-new-price"> ₹{item.price} </p>
           
             
            </div>

            <button
              className="button button-primary"
              onClick={() => moveToCart(item)}
            >
              {" "}
              Move to Cart{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
