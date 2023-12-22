import * as React from 'react';
import Button from '@mui/material/Button';
import Navigation from './Nav';
import { ShoppingCartRounded } from '@mui/icons-material';

export function NavbarHead({ count }) {
  return (
    <div className='parentDiv'>
      <div className='nav'>
        <h4>Start Bootstrap</h4>
      </div>

      <div className='home'>
        <Button variant="dark">HOME</Button>
        <Button variant="dark">ABOUT</Button>
        <Navigation />
      </div>
      <div className='cartButton btn btn-outline-dark'>
        <Button variant="dark" startIcon={<ShoppingCartRounded />}><b> Cart {count}</b></Button>


      </div>

    </div>
  );
}
