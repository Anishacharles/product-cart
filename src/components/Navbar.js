const  Navbar = ({cartCount,openCart}) =>{

    return(
        <nav className="bg-orange-100 shadow-md py-4 px-8" >
            <div className="container  mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Product list</h1>
                <button onClick={openCart} className="relative">
                    <span><i class="fa-solid fa-cart-shopping"></i></span>Cart({cartCount})
                </button>
            </div>
        </nav>
    )

}
export default Navbar
