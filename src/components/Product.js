import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import { Checkbox, Rating, Stack } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites, getAllFavorites } from "../store/favoritesSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getAllFavorites);
  const isFavorite = favorites.find((item) => item.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
      <div className="product-item bg-white p-3 rounded-lg hover:shadow-xl">
        <div className='flex justify-between items-center'>
          <div className="category text-white p-1 rounded-md text-xs uppercase bg-orange-500">{product?.category}</div>
          <div>
          <Checkbox
            checked={!!isFavorite}
            onChange={handleFavoriteToggle}
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </div>
        </div>
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-item-img mb-4">
            <img className="object-contain h-44 w-full" src={product?.images[0]} alt={product.title} />
          </div>
          <div className="product-item-info">
            <div className="brand text-xs text-gray-400 mb-2">
              <span>Brand: </span>
              <span className="fw-7 text-black">{product?.brand}</span>
            </div>
            <div className="title font-medium mb-1">{product?.title}</div>
            <div className='mb-4'>
            <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.1} readOnly />
          </Stack>
            </div>
            <div className="price flex align-center justify-center text-xm">
              <span className="old-price mr-1 line-through">{formatPrice(product?.price)}</span>
              <span className="new-price text-lg font-semibold ml-1 mr-1">{formatPrice(product?.discountedPrice)}</span>
              <span className="discount fw-6 ml-1 text-red-600">({product?.discountPercentage}% Off)</span>
            </div>
          </div>
        </Link >
      </div>
    </>
  );
};

export default Product;