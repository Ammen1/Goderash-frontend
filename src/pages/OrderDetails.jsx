import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 3,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
];

const OrderDetails = () => {
  const [open, setOpen] = useState(true);
  const history = useNavigate();

  const handleContinueShopping = () => {
    history.goBack();
  };

  return (
    <div className="w-full h-full p-4 sm:p-6 lg:p-8">
      <div className="text-lg font-semibold text-center mb-4">
        Shopping Cart
      </div>
      <div className="mt-4">
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-4 flex-col sm:flex-row">
                <div className="h-20 w-full sm:w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-2 sm:mb-0 sm:mr-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="mt-2 sm:mt-0">{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <div className="flex items-end justify-between text-sm mt-2">
                    <p className="text-gray-500">Qty {product.quantity}</p>
                    <div className="flex mt-1 sm:mt-0">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-4">
          <a
            href="https://chapa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md border border-transparent bg-secondary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Button
              type="button"
              onClick={handleContinueShopping}
              className="font-medium"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
