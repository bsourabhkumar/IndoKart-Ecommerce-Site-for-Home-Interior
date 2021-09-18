import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaCheck } from "react-icons/fa";
import { useWishListContext } from "../context/wishlist_context";
// import AmountButtons from "./AmountButtons";


const AddToWishList = ({product}) => {
    const {addToWishList} = useWishListContext();
    const { id } = product;
    return (
        <Wrapper>
            <div className="btn-container">
                {/* <AmountButtons
                amount={amount}
                increase={increase}
                decrease={decrease}
                /> */}
                <Link to="/wishlist" className="btn" 
                onClick={()=>addToWishList(id, product)}>
                add to wishlist
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToWishList
