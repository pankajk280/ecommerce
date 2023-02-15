import React from 'react';
import './Navbar.css';
import logo from '../../Images/logo2.svg';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SearchDescription from '../../Pages/SearchDescription/SearchDescription';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';



const Navbar = () => {
    const navigate = useNavigate();
    // const cartProducts = useSelector((store) => store.cart.value);
    // let nCartItems = 0;
    // cartProducts.forEach((productObj) => {
    //     nCartItems += productObj.qty;
    // });
    return(
        <div className='navbar'>
            <div className='right-navbar'>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>

                <SearchDescription />
                
            </div>
            <div className='left-navbar'>
                
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/products")}>Products</p>
                <p onClick={() => navigate("/about")}>About Us</p>
                <p>Contact Us</p>
                <p onClick={() => navigate("/account")}>Account</p>
                <div className='cart-logo'>
                <Link to="/cart">
            <Badge badgeContent={0} color="primary">
            <ShoppingBagOutlinedIcon />
            </Badge>
            </Link>
                </div>
            </div>

        </div>
    )
}
export default Navbar;