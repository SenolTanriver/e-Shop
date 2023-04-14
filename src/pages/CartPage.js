import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty, clearCart, getCartTotal } from '../store/cartSlice';
import trash from "../images/trash.svg"

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="m-12 bg-slate-100 rounded-lg">
      <div className='flex flex-col items-center justify-center h-screen'>
        <span className='text-2xl'>Ürün sepetiniz boş</span>
        <Link to="/" className='mr-3 px-4 py-2 rounded-md transition-colors duration-200 bg-orange-400 hover:bg-orange-500 text-black mt-8'>Alışverişe Başla</Link>
      </div>
      </div>

    )
  }

    return (
      <div className='container mx-auto m-12 p-8 bg-slate-100 rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-5 border-b-2 pb-2 mb-4'>
          <div className='col-span-1'></div>
          <div className='hidden md:block md:text-center md:mr-52'>Ürün</div>
          <div className='hidden md:block md:text-center md:mr-52'>Fiyat</div>
          <div className='hidden md:block md:text-center md:mr-52'>Miktar</div>
          <div className='hidden md:block md:text-center'>Tutar</div>
        </div>
    
        {carts.map((cart, index) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-5 border-b-2 pb-2 mb-4'>
            <div className='col-span-1'>
              <img className='w-36' src={cart.images[0]} alt='foti' />
            </div>
            <div className='col-span-2 flex flex-col justify-between'>
              <div>
                <h4 className='text-lg font-semibold mb-1'>{cart.name}</h4>
                <div className='text-center'>{formatPrice(cart.price)}</div>
              </div>
            </div>
            <div className='mt-2'>
              <button className='bg-gray-100 text-gray-500 hover:bg-gray-200 px-2 py-1 rounded-full mr-2' onClick={() => dispatch(toggleCartQty({ id: cart.id, type: 'DEC' }))}>-</button>
              <span className='text-xl font-semibold'>{cart.quantity}</span>
              <button className='bg-gray-100 text-gray-500 hover:bg-gray-200 px-2 py-1 rounded-full ml-2' onClick={() => dispatch(toggleCartQty({ id: cart.id, type: 'INC' }))}>+</button>
            </div>
            <div className='text-center'>{formatPrice(cart.totalPrice)}</div>
            <div className='col-span-1 text-center'>
              <button className='text-red-500 hover:text-red-600 w-8' onClick={() => dispatch(removeFromCart(cart.id))}><img src={trash}/></button>
            </div>
          </div>
        ))}
    
        <div className=' pt-4 flex flex-col md:flex-row justify-between'>
          <div className='flex gap-4 pt-4'>
            <button className='text-white bg-red-600 hover:bg-red-700 rounded-md py-2 px-4' onClick={() => dispatch(clearCart())}>Sepeti Temizle</button>
            <Link to="/" className='text-white bg-green-600 hover:bg-green-700 rounded-md py-2 px-4 text-center'>Alışverişe Devam Et</Link>
          </div>
          <div className='col-span-3 mt-4 md:mt-0 md:mr-24'>
    <div className='text-center'>Toplam:</div>
    <div className='text-right font-bold text-xl'>{formatPrice(totalAmount)}</div>
  </div>
</div>
</div>
)
}

export default CartPage;
