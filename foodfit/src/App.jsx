import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealKitForm from "./pages/MealKitForm";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import AppWrapper from "./components/AppWrapper";

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new" element={<MealKitForm />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
