import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent } from "../components";
// import { useUserContext } from "../context/user_context";
import { useAddressContext } from '../context/address_context';

const CartPage = () => {
  const { cart } = useCartContext();
  const {address} = useAddressContext();
  // const { myUser, loginWithRedirect } = useUserContext();
  console.log(address)
  // if (myUser) {
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        
                          {/* <h4>Your address</h4>
                          <p>Name: {address.name}</p>
                          <p>Street: {address.street}</p>
                          <p>City: {address.city}</p>
                          <p>State: {address.state}</p>
                          <p>Country: {address.country}</p>
                          <p>Pincode: {address.pincode}</p>
                          <p>Phone: {address.phone}</p> */}
                          {address.name ? <div className="address-section">
                                <h4>Your address</h4>
                                <p><strong>Name:</strong> {address.name}</p>
                                <p><strong>Street:</strong> {address.street}, <strong>City:</strong> {address.city}, <strong>State:</strong> {address.state}, 
                                <strong>Country:</strong> {address.country}</p>
                                                    
                                <p><strong>Pincode:</strong> {address.pincode}, <strong>Phone:</strong> {address.phone}</p>
                                
                                <Link to="/profile" className="btn">
                                  Change your address
                                </Link> 
                                </div>
                                : <Link to="/profile" className="btn address-btn">You have not entered any address, Please Enter your address</Link>}
                                <div className="empty">
          <h2>Your cart is currently empty</h2>
          <Link to="/products" className="btn address-container">
            Add products to your cart
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      {/* <PageHero title="cart" /> */}
      <Wrapper className="page">
       
      {address.name ? <div className="address-section">
      <h4>Your address</h4>
                                <p><strong>Name:</strong> {address.name}</p>
                                <p><strong>Street:</strong> {address.street}, <strong>City:</strong> {address.city}, <strong>State:</strong> {address.state}, 
                                 <strong>Country:</strong> {address.country}</p>
                                                    
                                <p><strong>Pincode:</strong> {address.pincode}, <strong>Phone:</strong> {address.phone}</p>
                                
                                <Link to="/profile" className="btn">
                                  Change your address
                                </Link> 
                                </div>
                                : <Link to="/profile" className="btn address-btn">You have not entered any address, Please Enter your address</Link>}
                <CartContent />
      </Wrapper>
    </main>
  );
  // } else {
  //   return (
  //     <Wrapper className="page-100">
  //         <div className="empty">
  //           <h2>Your cart is currently empty</h2>
  //           <Link to="/products" className="btn">
  //             Add products to your cart
  //           </Link>
  //         </div>
  //       </Wrapper>
  // <div>
  //   <div className="empty page-100">
  //     <h3>Your Basket is empty</h3>
  //   </div>
  //   <button type="button" className="btn" onClick={loginWithRedirect}>
  //     login
  //   </button>
  // </div>
  // );
  // }
};

const Wrapper = styled.main`
    .address-btn{
      margin: 4%;
      text-transform: capitalize;
    }
    .address-section{
      border: 0.5px solid gray;
      padding: 2%;
      margin: 1%;
      margin-bottom: 0;
    }
    .address-container{
      margin: 2%;
    }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
