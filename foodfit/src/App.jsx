import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealKitForm from "./pages/MealKitForm";
import Cart from "./pages/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/new" element={<MealKitForm />} />
      </Routes>
    </>
  );
};

export default App;
