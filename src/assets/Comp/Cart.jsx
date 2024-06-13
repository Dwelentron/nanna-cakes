import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  if (isEmpty) return <p className="text-center mt-8 font-bold">Your Cart is Currently Empty</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Cart ({totalUniqueItems})</h1>
        <p className="text-green-700 text-2xl font-semibold">Total: Ksh {cartTotal} /=</p>
        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex items-center">
              <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    className={`px-3 py-1 ${item.quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 text-white'} rounded-md mr-2`}
                    disabled={item.quantity === 1}
                  >
                    Reduce
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-1 bg-gray-500 text-white rounded-md"
                  >
                    Remove from Cart
                  </button>
                </div>
                <p className="mt-2 text-lg font-semibold">Subtotal: Ksh {item.price * item.quantity}/=</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
