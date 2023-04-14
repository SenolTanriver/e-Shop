import { NavLink, Link } from "react-router-dom";
import login from "../images/login.svg"
import bird from "../images/bird.png"
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { getAllCarts, getCartItemsCount, getCartTotal } from "../store/cartSlice";
import { useSelector, useDispatch } from 'react-redux';
import FavoritesIcon from "./FavoritesIcon";
import SideBar from "./SideBar";



function Header() {
    const dispatch = useDispatch();
    const carts = useSelector(getAllCarts);
    const itemsCount = useSelector(getCartItemsCount);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts])

    return (
        <>
            <div className="hidden sm:block">

                <div className="bg-cyan-500 px-7 py-4 flex justify-between text-white" >
                    <div className="flex">

                        <Link to={"/"} className="flex items-center">
                            <img className="w-26" src={bird} alt="bird" />
                            <p className="-rotate-45 text-xl">e-Shop</p>
                        </Link>

                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="w-96 rounded-lg border-gray-300 border-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="Aramak istediğiniz ürünü yazın"
                            onChange={(e) => handleSearchTerm(e)}
                        />
                        <Link
                            to={`search/${searchTerm}`}
                            className=" right-0 top-0 w-160 h-full px-3 flex items-center text-gray-600"
                        >

                            <span className="text-white p-1 rounded-md text-xl uppercase bg-orange-500">Ara</span>
                        </Link>
                    </div>


                    <div className="flex items-center">

                        <FavoritesIcon />

                        <CartIcon />

                        <Link className="mx-4 flex items-center">
                            <img className="w-7 mr-2" src={login} alt="login" />
                            <p>Üye Girişi</p>
                        </Link>

                    </div>
                </div>
                <div className="flex p-2 bg-cyan-600 text-white	mb-8 justify-between">
                    <div className="ml-12 items-center">

                        <marquee><a href="https://www.linkedin.com/in/senoltanriver/">Bu proje React-Redux-Tailwind-Mui-DummyJSON api kullanılarak öğrenme ve geliştirme amaçlı hazırlanmıştır</a></marquee>

                    </div>
                    <div className="flex mr-5">
                        <NavLink to="/" className="mr-3 px-4 py-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Anasayfa</p>
                        </NavLink>
                        <NavLink to="/about" className="mr-3 px-4 py-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Hakkımızda</p>
                        </NavLink>
                        <NavLink to="/blog" className="mr-3 px-4 py-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Blog</p>
                        </NavLink>
                        <NavLink to="/contact" className="mr-3 px-4 py-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>İletişim</p>
                        </NavLink>
                    </div>
                </div>
            </div>
          
            <div className="block md:hidden">
                <div className="bg-cyan-500 px-4 py-1 flex flex-col lg:flex-row justify-between text-white">
                    <div className="flex justify-center mb-4 lg:mb-0">
                        <Link to={"/"} className="flex items-center">
                            <img className="w-20" src={bird} alt="bird" />
                        <p className="-rotate-45 text-lg">e-Shop</p>
                        </Link>
                    </div>
                    <div className="flex justify-center mb-4 lg:mb-0">
                        <FavoritesIcon />
                        <CartIcon />
                        <Link className="mx-4 flex items-center">
                            <img className="w-6" src={login} alt="login" />
                            <p>Üye Girişi</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <input
                            type="text"
                            className=" w-60 rounded-lg border-gray-300 border-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="Aramak istediğiniz ürünü yazın"
                            onChange={(e) => handleSearchTerm(e)}
                        />
                        <Link
                            to={`search/${searchTerm}`}
                            className=" right-0 top-0 w-102 h-full px-3 flex items-center text-gray-600"
                        >
                            <span className="text-white p-1.5 rounded-md text-ml uppercase bg-orange-500">Ara</span>
                        </Link>
                    </div>
                </div>
                <div className="bg-cyan-600 p-2 text-white">
                    <div className="flex flex-wrap justify-center lg:justify-start text-center lg:text-left">
                        <NavLink to="/" className="mr-3 py-1.5 px-1 mb-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Anasayfa</p>
                        </NavLink>
                        <NavLink to="/about" className="mr-3 pt-1.5 px-1 mb-2 lg:mb-0 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Hakkımızda</p>
                        </NavLink>
                        <NavLink to="/blog" className="mr-3 pt-1.5 px-1  mb-2 lg:mb-0 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>Blog</p>
                        </NavLink>
                        <NavLink to="/contact" className="mr-3 pt-1.5 px-1 mb-2 rounded-md transition-colors duration-200 bg-white hover:bg-orange-500 text-black">
                            <p>İletişim</p>
                        </NavLink>
                    </div>
                </div>
                    <SideBar/>
            </div>
        </>
    );
}

export default Header;
