import React, { useEffect } from 'react';
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory, fetchAsyncProductsOfCategory, getCategoryProductsStatus } from '../store/categorySlice';
import { STATUS } from '../utils/status';
import Category from '../components/Category';

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className='m-12 p-8 bg-slate-100 rounded-lg'>
          <div className='flex'>
            <div className='hidden sm:block'>
            <Category />
            </div>
            <div>
              <h3 className='text-orange-500 text-3xl font-semibold'><span className='text-capitalize'>{category.replace("-", " ")} Kategorisindeki Ürünler</span></h3>
              <hr class="border-gray-300"></hr>
              <ProductList products={categoryProducts} />
            </div>
        </div>
    </div>
  )
}

export default CategoryProductPage