import { useCartContext } from "../provider/CartProvider";
import CartItem from "../components/CartItem";

const Cart = () => {

    const {state:{cart, totalPrice, countItems}} = useCartContext();

    return (
        <div className="w-screen h-screen p-10">
            <h1>Carrito</h1>
            <div className="h-5/6">
                {
                    cart.map((product)=>(
                        <CartItem product={product}></CartItem>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 text-center">
            <h2>Total price: ${totalPrice}</h2>
            <h2>Total products: {countItems}</h2>
            </div>
        </div>
    );
};

export default Cart;