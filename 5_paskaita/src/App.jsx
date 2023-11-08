import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Users from "./components/Users";
import "./App.css";

const URL = "https://sophisticated-humane-dandelion.glitch.me";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedProduts = products.filter((product) => product.id !== id);
    setProducts(updatedProduts);
  };

  return (
    <div>
      {isLoading && <div>Duomenys kraunasi...</div>}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <br />
      <Users />
    </div>
  );
};

export default App;
