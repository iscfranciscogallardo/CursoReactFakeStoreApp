import { useCartContext } from "../provider/CartProvider";

const CartItem = ({product}) =>{

    const { dispatch } = useCartContext();

    return (
        <div className="rounded-sm bg-white hover:bg-slate-200 justify-start grid grid-cols-4 my-2 py-2 border-solid border-2">
            <img src={product.image} className="w-9" alt="producto"></img>
            <span className="font-bold text-center">Product: {product.title}</span>
            <span className="font-bold text-center">Price: ${product.price}</span>
            <button className="bg-red-600 hover:bg-red-900 text-white rounded-md h-10 w-28 items-end hover:cursor-default align-middle"
            onClick={()=> {dispatch({type:"REMOVE_FROM_CART", payload:product}); alert(`Se elimino el producto`);}}>Eliminar</button>
        </div>
    );
};

export default CartItem;