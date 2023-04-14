import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, fetchAsyncCategories } from '../store/categorySlice';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  }

  return (
    <div className="flex m-12 min-w-max">
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="font-bold text-gray-800 mb-4">Kategoriler</h2>
        <ul>
          {categories.map((category, idx) => (
            <li key={idx} className="py-2">
              <Link
                to={`/category/${category}`}
                className={`flex items-center justify-between px-4 py-2 rounded-md transition-colors duration-200 ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'}`}
                onClick={() => handleCategoryClick(category)}
              >
                <span className={`${activeCategory === category ? 'text-white' : 'text-gray-800'}`}>{category.replace('-', ' ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
