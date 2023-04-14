import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from "../images/cart.svg"
import { getCartItemsCount } from '../store/cartSlice';

const CartIcon = () => {
    const itemsCount = useSelector(getCartItemsCount);
    console.log(itemsCount)
    return (
      <Link to="/cart" className="sm:mx-4 flex items-center">
        <Badge badgeContent={itemsCount} color="error">
          <div className="relative">
            <img className="sm:w-8 w-7 " src={cart} alt="cart" />
          </div>
        </Badge>
        <p className='ml-3'>Sepet</p>
      </Link>
    );
};

export default CartIcon;
