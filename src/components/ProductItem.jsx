import { useCartContext } from "../provider/CartProvider";

const ProductItem = ({product, setProductDetailView}) =>{

    const {dispatch } = useCartContext();
    const {state:{cart}} = useCartContext();

    const isAdded=()=>{
        return ((cart.filter((productCart)=>productCart.id === product.id)).length !== 0)
    };

    return (
        <div className="rounded-sm bg-white hover:bg-slate-200 flex flex-col relative border-solid border-2 border-t-stone-400 h-96">
            <img src={product.image} className="object-scale-down h-48 w-96" alt="producto"></img>
            <span className="font-bold text-center">Product: {product.title}</span><br/>
            <span className="font-bold text-center">Price: ${product.price}</span>
            <div className="flex flex-row justify-between absolute inset-x-0 bottom-0 m-5">
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 mt-2 items-end hover:cursor-default"
                onClick={()=> {setProductDetailView(product);}}>Ver producto</button>
                {
                    !isAdded() ?
                        <button className="bg-green-500 hover:bg-green-600 text-white rounded-md p-2 mt-2 items-end hover:cursor-default "
                        onClick={()=> {dispatch({type:"ADD_TO_CART", payload:product}); alert(`Se agrego ${product.title}`);}}>Añadir a Carrito</button>
                    :
                        <button className="bg-red-600 hover:bg-red-900 text-white rounded-md p-2 mt-2 items-end hover:cursor-default "
                        onClick={()=> {dispatch({type:"REMOVE_FROM_CART", payload:product}); alert(`Se elimino ${product.title}`);}}>Eliminar de Carrito</button>                        
                }
            </div>
        </div>
    );
};

export default ProductItem;