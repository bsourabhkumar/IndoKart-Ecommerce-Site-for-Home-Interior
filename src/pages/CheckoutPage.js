import React from "react";
import styled from "styled-components";
import {  StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { useAddressContext } from '../context/address_context';

const CheckoutPage = () => {
  const {address} = useAddressContext();
  const {cart} = useCartContext();
  return (
    <main>
      {/* <PageHero title="checkout" /> */}
      <Wrapper className="page">
      { cart.length < 1 ? <div className="empty">
        <h2>your cart is empty</h2>
        <Link to="/products" className="btn">
          shop now
        </Link>
      </div> : address.name ? <StripeCheckout />: 
        <Link to="/profile" className="btn">You have not entered your address, please enter your address</Link> }
        
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      .empty{
        text-align: center;
      }
`;


export default CheckoutPage;
