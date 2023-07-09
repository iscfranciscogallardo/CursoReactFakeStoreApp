import { useCartContext } from "../provider/CartProvider";

const ProductDetails = ({setProductDetailView, product}) => {
 
    const {dispatch } = useCartContext();
    const {state:{cart}} = useCartContext();

    const isAdded=()=>{
        return ((cart.filter((productCart)=>productCart.id === product.id)).length !== 0)
    };

    return (
        <div className="mx-96 my-10 rounded-sm bg-white flex flex-col relative border-solid border-2 border-t-stone-400 h-5/6">           
            <h1 className="font-bold text-center text-3xl text-gray-900">{product.title}</h1><br/>
            <div className="grid grid-cols-2 gap-4 content-center ...">
                <img src={product.image} className="object-scale-down h-96 w-96" alt="producto"></img>
                <div className="grid grid-cols-1 gap-4 content-center p-3 ...">
                    <span className="font-bold text-3xl">Category: {product.category}</span>
                    <span className="font-bold text-3xl">Price: ${product.price}</span>
                    <span className="font-bold  text-justify text-xl">Description: {product.description}</span>
                </div>
            </div>
            <div className="flex flex-row justify-between absolute inset-x-0 bottom-0 m-5">
                <button className="bg-gray-700 hover:bg-black text-white rounded-md p-2 mt-2 items-end hover:cursor-default"
                onClick={()=> {setProductDetailView(undefined)}}>Regresar</button>
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

export default ProductDetails;