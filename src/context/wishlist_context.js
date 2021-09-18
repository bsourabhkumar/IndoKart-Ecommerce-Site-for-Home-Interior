import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/wishlist_reducer";
import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST_ITEM,
    CLEAR_WISHLIST,
    } from "../actions";


const getLocalStorage = () => {
        let wishlist = localStorage.getItem("wishlist");
        if (wishlist) {
            return JSON.parse(localStorage.getItem("wishlist"));
            } else {
            return [];
            }
        };

const initialState = {
    wishlist: getLocalStorage(),
    
    };

const WishListContext = React.createContext();

export const WishListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

 // add to wishlist
const addToWishList = (id, product) => {
    dispatch({ type: ADD_TO_WISHLIST, payload: { id, product } });
}

// remove item
const removeItem = (id) => {
    dispatch({ type: REMOVE_WISHLIST_ITEM, payload: id });
  };

// clear wishlist
const clearWishList = () => {
    dispatch({ type: CLEAR_WISHLIST });
  };

  useEffect(() => {
    // dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <WishListContext.Provider
      value={{ ...state, addToWishList, removeItem, clearWishList }}
    >
      {children}
    </WishListContext.Provider>
  );

}

// make sure use
export const useWishListContext = () => {
    return useContext(WishListContext);
  };