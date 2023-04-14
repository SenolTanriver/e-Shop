import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchAsyncSearchProduct, getSearchProducts, setSearchTerm, getSearchProductsStatus, clearSearch } from '../store/searchSlice';

const SearchPage = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);

    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    }, [searchTerm]);

    if (searchProducts.length === 0) {
        return (
            <div className='container' style={{
                minHeight: "70vh"
            }}>
                <div className='fw-5 text-danger py-5'>
                    <h3>No Products found.</h3>
                </div>
            </div>
        )
    }

    return (
        <main>
            <div className='m-12 p-8 bg-slate-100 rounded-lg'>
                    <div className='py-5'>
                        <div className='text-orange-500 text-3xl font-semibold'>
                            <h3>Search results:</h3>
                            <hr class="border-gray-300"></hr>
                        </div>
                        <br />

                        <ProductList products={searchProducts} />

                    </div>
            </div>
        </main>
    )
}

export default SearchPage;