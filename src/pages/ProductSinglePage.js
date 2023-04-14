import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncProductSingle, getProductSingle, getSingleProductStatus } from '../store/productSlice';
import { formatPrice } from "../utils/helpers";
import { useState } from 'react';
import { Rating, Snackbar, Stack } from '@mui/material';
import { addToCart } from '../store/cartSlice';
import MuiAlert from '@mui/material/Alert';

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [selectedImage, setSelectedImage] = useState(null);



  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    
  });
  
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);

    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false); 
    };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  }

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8">
      <div className="flex flex-col items-center justify-center">
        {product.images && product.images.length > 0 && (
          <img src={selectedImage || product.images[0]} alt="" className="w-full md:w-102 h-56 object-contain mb-4" />
        )}

        {product.images && (
          <div className="flex justify-between flex-wrap">
            {product.images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`w-16 h-auto object-contain cursor-pointer mr-4 ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">{product?.title}</h2>
        <p className="text-lg mb-4">{product?.description}</p>

        <div className="mb-4 flex">
          <span className="mr-2 text-gray-500">Rating:</span>
          <span> <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.1} readOnly />
          </Stack></span>
        </div>

        <div className="mb-4">
          <span className="mr-2 text-gray-500">Brand:</span>
          <span>{product?.brand}</span>
        </div>

        <div className="mb-4">
          <span className="mr-2 text-gray-500">Category:</span>
          <span>{product?.category ? product.category.replace("-", " ") : ""}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">{formatPrice(discountedPrice)}</div>
            <div className="text-sm text-gray-500">Inclusive of all taxes</div>
          </div>

          <div className="flex items-center mt-2">
            <div className="text-xl font-bold mr-2">{formatPrice(product?.price)}</div>
            <div className="text-sm text-gray-500">{product?.discountPercentage}% OFF</div>
          </div>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <div onClick={handleClick}>
              <button className='w-56 mt-3 px-4 py-2 rounded-md bg-orange-500 transition-colors duration-200 hover:bg-orange-600' onClick={() => dispatch(addToCart({ id: product.id, name: product.title, images: product.images, price: discountedPrice, quantity: 1, totalPrice: discountedPrice }))}>
                Sepete Ekle
              </button>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Ürününüz sepete eklendi!
              </Alert>
            </Snackbar>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ProductSinglePage;
