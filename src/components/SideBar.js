import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, fetchAsyncCategories } from '../store/categorySlice';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import burger from "../images/burger.svg"

const SideBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [activeCategory, setActiveCategory] = useState('');
  const [state, setState] = useState({ left: false });

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'left' ? 250 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map((category, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton component={Link} to={`/category/${category}`} onClick={() => handleCategoryClick(category)}>
              <ListItemText primary={category.replace('-', ' ')} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex m-2 min-w-max">
        <Button onClick={toggleDrawer('left', true)}><img className='w-10' src={burger}/> Kategoriler</Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
    </div>
  );
};

export default SideBar;
