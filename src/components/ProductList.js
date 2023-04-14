import React from 'react';
import Product from "../components/Product";

const ProductList = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
      {
        products.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key = {product.id} className="col-span-1" product = {{...product, discountedPrice}} />
          )
        })
      }
    </div>
  )
}

export default ProductList;
