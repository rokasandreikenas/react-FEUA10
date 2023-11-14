import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealKitForm from "./pages/MealKitForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<MealKitForm />} />
    </Routes>
  );
};

export default App;
