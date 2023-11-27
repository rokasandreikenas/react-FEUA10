import { Routes, Route } from "react-router-dom";
import Pets from "./pages/Pets";
import PetForm from "./pages/PetForm";
import Pet from "./pages/Pet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pets />} />
      <Route path="/pets/:id" element={<Pet />} />
      <Route path="/add-pet" element={<PetForm />} />
    </Routes>
  );
};

export default App;
