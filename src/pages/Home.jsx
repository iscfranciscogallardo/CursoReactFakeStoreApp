import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import ProductDetails from "./ProductDetails";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productDetailView, setProductDetailView] = useState();
    const [productToFind, setFindProduct] = useState('');
    const { getProducts } = useApi();
    
    const findProducts=(title)=>{
        setFindProduct(title);
    }

    useEffect(()=>{
        getProducts()
            .then((products)=>{
                setProducts(products);
                setLoading(false);
            })
            .catch((err)=>console.err(err));
    }, []);

    useEffect(()=>{
        getProducts()
            .then((products)=>{
                setProducts(products.filter(p => p.title.toUpperCase().includes(productToFind.toUpperCase())));
            })
            .catch((err)=>console.err(err));
    }, [productToFind]);


    return (
        <div className="w-screen h-screen">
            {loading && <Loading></Loading>}
            {(productDetailView !== undefined) && <ProductDetails setProductDetailView={setProductDetailView} product={productDetailView} ></ProductDetails>}
            {(!loading && (productDetailView === undefined)) && (
                <div className="w-screen">
                    <div className="w-screen flex justify-center ...">
                        <input className='mx-2 my-10 px-8 w-96 border-solid border-2 ...' type="text" placeholder="Filtrar producto..." onChange={({target})=>{findProducts(target.value)}}></input>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {products.map((product)=>(
                            <ProductItem key={product.id} product={product} setProductDetailView={setProductDetailView}></ProductItem>
                        ))}
                    </div>
                </div>)}
        </div>        
    );
};

export default Home;