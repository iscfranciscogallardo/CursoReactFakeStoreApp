import { Link } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

const NavBar = () => {

    const {state:{countItems}} = useCartContext();

    return (
        <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
            <Link to="/"><span>FakeStore</span></Link>
            <Link to="/cart-component"><span>Carrito { countItems > 0 ? `[${countItems}]` : '' }</span></Link>
        </nav>
    );
};

export default NavBar;