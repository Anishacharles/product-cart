
const ProductCard = ({ product, addToCart, cartItem,removeFromCart }) => {
    const isInCart = cartItem.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        if (isInCart) {
            alert("Item is already added to the cart.")
        }
        else {
            addToCart(product)
    alert(`${product.title} has been added to the cart.`);
        }
    }

   

    return (
        <div className="border p-4 rounded-md">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-gray-500">Price: ${product.price}</p>
           
            <button
                onClick={handleAddToCart}
                className={`${isInCart ? 'bg-red-300 hover:bg-red-200' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white py-2 px-4 rounded transition`}  disabled={isInCart}
            >
                {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default ProductCard;