import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductList({cart, setCart}) {
  const [products, setProducts] = useState();
  const [showMore, setShowMore] = useState(false);
  //const [itemCount, setItemCount] = useState(1);
  const [show, setShow] = useState(true);
  const [selectedId, setID] = useState();

  const fetchImage = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const handleOnClick = (product) => {
    let obj = cart.find((prod) => prod.id === product.id);
    console.log(obj);
    if (obj) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // setCart((product) => [
  //     ...cart,
  //     { ...product, amount: 1 } // <-- initial amount 1
  //   ]);

  // console.log(cart,"from product")

  return (
    <div>
      <div className="container">
        {products &&
          products.map((product) => (
            <div
              style={{
                width: "600px",
                margin: "25px",
                height: "300px",
                // border: "solid black 2px",
                padding: "10 px",
                display: "flex",
                flexDirection: "column",
                display: "inline-block",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <img
                src={product.image}
                width="100px"
                height="120px"
                align="centre"
                display="inline-block"
              ></img>
              <p>
                {showMore && product.id === selectedId
                  ? product.description
                  : `${product.description.substring(0, 200)}`}
                <button
                  className="btn"
                  onClick={() => {
                    setShowMore(!showMore), setID(product.id);
                  }}
                >
                  {showMore && product.id === selectedId
                    ? " Show less"
                    : ".....Show more"}
                </button>
              </p>
              <p>Price : ${product.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={() => {
                  handleOnClick(product);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
