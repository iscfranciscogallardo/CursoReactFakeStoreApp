import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./provider/CartProvider";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="h-screen flex flex-col">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/cart-component" exact element={<Cart/>}></Route>
            </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
};

export default App;
