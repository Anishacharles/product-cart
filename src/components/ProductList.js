import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ addToCart, cartItem }) => {

    const [products, setProducts] = useState([]);

    //fetch product data

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));

    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    cartItem={cartItem}
                    
                />
            ))}
        </div>
    )
}

export default ProductList