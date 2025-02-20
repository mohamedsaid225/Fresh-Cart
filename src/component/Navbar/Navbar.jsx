import { Link, NavLink } from 'react-router-dom'
import freshCartLogo from '../../assets/images/freshcart-logo.svg'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
export default function Navbar() {
    let { token, logOut } = useContext(UserContext)
    let { cartInfo, getCartProducts } = useContext(CartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        getCartProducts()
    }, [])
    return (
        <nav className='navbar py-3 bg-slate-100 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img src={freshCartLogo} alt="FreshCart Logo" className="w-full" />
                </Link>

                {/* 🔹 زر القائمة الجانبية للأجهزة الصغيرة */}
                <div className='border border-2 rounded-lg mr-2'>
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-2xl p-2">
                        <i className="fa-solid fa-bars text-slate-800"></i>
                    </button>
                </div>

                {token && <>
                    {/* القائمة الأساسية للأجهزة الكبيرة */}
                    < ul className='hidden md:flex items-center gap-5'>
                        <li><NavLink className={({ isActive }) => { return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}` }} to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                        }} to="/products">Products</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                        }} to="/category">Categories</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                        }} to="/brands">Brands</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                        }} to="/allorders">Orders</NavLink></li>
                        <li><NavLink className={({ isActive }) => {
                            return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                        }} to="/wishlist">Wishlist</NavLink></li>
                    </ul>
                    {/* أيقونة السلة */}
                    <Link to='/cart' className='cart relative hidden md:block'>
                        <i className='fa-solid fa-cart-shopping text-lg'></i>
                        <div className="cart-counter absolute right-0 top-0 h-5 w-5 bg-primary-800 text-white rounded-full flex justify-center items-center translate-x-1/2 -translate-y-1/2">
                            {cartInfo ? <span className='text-sm font-semibold'>{cartInfo.numOfCartItems}</span> : <i className='fa-solid fa-spinner fa-spin'></i>}
                        </div>
                    </Link>

                </>}

                {/* روابط التواصل الاجتماعي */}
                <ul className={`hidden md:flex items-center gap-5 ${!token && "ms-auto"}`}>
                    <li>
                        <a href="https://instagram.com" target='_blank'>
                            <i className='fa-brands fa-instagram'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target='_blank'>
                            <i className='fa-brands fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://tiktok.com" target='_blank'>
                            <i className='fa-brands fa-tiktok'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target='_blank'>
                            <i className='fa-brands fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target='_blank'>
                            <i className='fa-brands fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com" target='_blank'>
                            <i className='fa-brands fa-youtube'></i>
                        </a>
                    </li>
                </ul>

                {/* أزرار تسجيل الدخول/الخروج */}
                <ul className="hidden md:flex items-center gap-5 ml-8">
                    {!token && <>
                        <li>
                            <NavLink className={({ isActive }) => {
                                return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                            }} to="/signup">Signup</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => {
                                return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                            }} to="/login">Login</NavLink>
                        </li>
                    </>}
                    {token && <>
                        <li onClick={logOut}>
                            <NavLink to=""><i className='fa-solid fa-right-from-bracket text-lg'></i></NavLink>
                        </li>
                    </>}
                </ul>
            </div>

            {/* 🔹 القائمة الجانبية للأجهزة الصغيرة */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div className={`fixed top-0 left-0 w-full h-auto bg-white shadow-lg p-5 transition-all transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-[70px] opacity-100" : "translate-y-[-70px] opacity-0"}`}>
                        {/* زر الإغلاق */}
                        <button onClick={() => setIsMenuOpen(false)} className="text-2xl absolute top-4 right-4">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        {token && <>
                            <div className='space-y-6'>
                                {/* عناصر القائمة */}
                                <ul className="flex flex-col gap-4 mt-10">
                                    <li><NavLink className={({ isActive }) => { return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}` }} to="/">
                                        Home
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/products">Products</NavLink></li>
                                    <li><NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/category">Categories</NavLink></li>
                                    <li><NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/brands">Brands</NavLink></li>
                                    <li><NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/allorders">Orders</NavLink></li>
                                    <li><NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/wishlist">Wishlist</NavLink></li>
                                </ul>
                                <Link to='/cart' className='cart relative'>
                                    <i className='fa-solid fa-cart-shopping text-lg mt-8'></i>
                                    <div className="cart-counter absolute right-0 top-0 h-5 w-5 bg-primary-800 text-white rounded-full flex justify-center items-center translate-x-1/2 -translate-y-1/2">
                                        {cartInfo ? <span className='text-sm font-semibold'>{cartInfo.numOfCartItems}</span> : <i className='fa-solid fa-spinner fa-spin'></i>}
                                    </div>
                                </Link>
                                {/* روابط التواصل الاجتماعي */}
                                <ul className="flex items-center justify-center gap-8 mt-5">
                                    <li>
                                        <a href="https://instagram.com" target='_blank'>
                                            <i className='fa-brands fa-instagram'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://facebook.com" target='_blank'>
                                            <i className='fa-brands fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tiktok.com" target='_blank'>
                                            <i className='fa-brands fa-tiktok'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com" target='_blank'>
                                            <i className='fa-brands fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com" target='_blank'>
                                            <i className='fa-brands fa-linkedin'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com" target='_blank'>
                                            <i className='fa-brands fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>}

                        {/* أزرار تسجيل الدخول/الخروج */}
                        <ul className="mt-5">
                            {!token && <>
                                <li>
                                    <NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/signup">Signup</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => {
                                        return `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full before:transition-[width] before:duration-300 before:bg-primary-800 before:left-0 before:-bottom-1 ${isActive ? 'before:!w-full font-semibold ' : ""}`
                                    }} to="/login">Login</NavLink>
                                </li>
                            </>}
                            {token && <>
                                <li onClick={logOut}>
                                    <NavLink to=""><i className='fa-solid fa-right-from-bracket text-lg'></i></NavLink>
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            )
            }
        </nav >
    )
}
