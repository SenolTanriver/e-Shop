import React from "react";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../store/favoritesSlice";
import Product from "../components/Product";

const Favorites = () => {
    const favorites = useSelector(getAllFavorites);

    if (favorites.length === 0) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-xl font-bold">Favori ürününüz bulunmamaktadır.</h1>
            </div>
        );
    }

    return (

        <div className='m-12 p-8 bg-slate-100 rounded-lg'>
                <div>
                    <h3 className='text-orange-500 text-3xl font-semibold'><span> Favori Listenizdeki Ürünler</span></h3>
                    <hr class="border-gray-300"></hr>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
                    {favorites.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;