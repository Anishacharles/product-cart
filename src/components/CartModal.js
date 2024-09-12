const CartModal = ({cartItem,removeFromCart,closeCart}) => {

    return(
        <div class="fixed inset-0 bg-grey-800 bg-opacity-50 flex justify-center items-center">
<div className="bg-yellow-200 p-6  rounded-lg">
    <h2 className="font-bold text-lg mb-4">My cart<span><i class="fa-solid fa-cart-shopping"></i></span></h2>
    {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
    ):(
        <div>
            {cartItem.map((item) => (
                <div key={item.id} className="flex justify-between mb-4">
                    <span>{item.title}</span>
                    <button 
                    onClick={() =>removeFromCart(item.id)}
                    className="bg-red-400 text-white px-2 py-1 rounded">Remove</button>
                     </div>
            ))}
       </div>    
    )}

    <button onClick={closeCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ">Close</button>
   
</div>
</div>
        
)
}

export default CartModal;