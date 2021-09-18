import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { useWishListContext } from "../context/wishlist_context";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const {wishlist} = useWishListContext();
  console.log(myUser)
    return (
        <Wrapper className="cart-btn-wrapper">
        <div>

            <Link to="/wishlist" className="cart-btn" onClick={closeSidebar}>
              <MenuItem>
                    <Badge badgeContent={wishlist.length} color="primary" >
                    <FavoriteBorderIcon />
                    </Badge>
                </MenuItem> 
                
                WishList
            </Link>
        </div>
        <div>

            <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
                
                <MenuItem>
                    <Badge badgeContent={total_items ? total_items : 0} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem> 
                Cart
            </Link>
        </div>
        
        <div>

            <Link to="/profile" className="cart-btn" onClick={closeSidebar}>
              <MenuItem>
                    
                    <PersonOutlineOutlinedIcon />
                    
                </MenuItem> 
                Hi!, {myUser ? myUser.name : "Please Login"}
                
            </Link>
        </div>
        <div>
        {myUser ? (
        <button
          type="button"
          className="auth-btn cart-btn"
          
          onClick={() => {
            closeSidebar();
          clearCart();
          logout({ returnTo: window.location.origin });}
          }
        >
          <MenuItem>
            <FaUserMinus />
          </MenuItem>
          Logout 
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn cart-btn"
        
          onClick={()=> {loginWithRedirect(); closeSidebar();}}
        >
        
        <MenuItem>
          <FaUserPlus />
        </MenuItem>
          Login        
        </button>
      )}
      </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-right: 10px;
    flex-direction: row;
    justify-content:space-around;
    /* align-items: center; */
    .auth-btn{
      border: none;
      background-color: white;
      cursor: pointer;
      font-size: 18px;
    }
    .cart-btn{

      text-decoration: none;
    }
`;
const MenuItem= styled.div`
  font-size: 18px;
  cursor: pointer;
`

export default CartButtons