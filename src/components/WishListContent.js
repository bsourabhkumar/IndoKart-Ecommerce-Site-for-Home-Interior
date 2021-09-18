import React from "react";
import styled from "styled-components";
import { useWishListContext } from "../context/wishlist_context";
import { Link } from "react-router-dom";
// import CartColumns from "./CartColumns";
// import CartItem from "./CartItem";
// import CartTotals from "./CartTotals";

const WishListContent = () => {
  const { wishlist, removeItem, clearWishList } = useWishListContext();
    console.log("here is the wishlist", wishlist);
  return (
    <Wrapper className="section section-center">
      <div>
      {wishlist.map((item, index) => {
        const {id, name, price, images, company, category} = item;
        return <div key={index}>
              <div className="wishlist-content">
            <div className="img-container"><img src={images[0].url} alt="product-img" /></div>
            <div className="detail-container">
                <h3>{name}</h3>
                <p>Price: ₹{(price/10).toFixed(0)}</p>
                <p>Company: {company}</p>
                <p>Category: {category}</p>
                <Link to={`/products/${id}`}>
                <button type="button">Buy this product</button>
                </Link>
                <button type="button" onClick={()=>removeItem(id)}>
                    Remove this product
                </button>
            </div>
            
        </div>
        <hr />
        </div>
        
      })}
      
      </div>
      
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Go to Products
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearWishList}
        >
          clear WishList
        </button>
      </div>
      
    </Wrapper>
  );
};
const Wrapper = styled.section`
        /* margin-bottom: 5px; */
        .wishlist-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2vh;
           

        }
        .img-container{
            img{
                flex: 1;
                object-fit: fill;
                height:400px;
                width: 400px;
            }
        }
        .detail-container{
            flex: 1;
            text-transform: capitalize;
            font-size: 24px;
            font-weight: 700;
            margin-left: 20vw;
            button{
                /* border: none; */
                font-size: 16px;
                text-transform: capitalize;
                background-color: black;
                color: white;
                cursor: pointer;
                margin: 7px;
                padding: 4px;
                font-weight: 700;
                border-radius: 5px;
                @media (max-width: 768px){
                  margin-left: 6vw;
                }
            }
            button:hover{
                background-color: gray ;
                color: black;
            }
            @media (max-width: 768px){
              margin-left: 10vw;
              font-size: 20px;
            }
        }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  @media screen and ( max-width:768px){
    .wishlist-content{
        display: flex;
        flex-direction: column;
    }
    }
`;
export default WishListContent;
