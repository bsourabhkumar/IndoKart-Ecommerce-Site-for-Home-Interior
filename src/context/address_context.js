import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/address_reducer";

const getLocalStorage = () => {
    let address = localStorage.getItem("address");
    if (address) {
        return JSON.parse(localStorage.getItem("address"));
        } else {
        return {
            
        };
        }
    };

const initialState = {
        address: getLocalStorage(),
        
        };
    
const AddressContext = React.createContext();

export const AddressProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

 // add to wishlist
const addToAddress = (address) => {
    dispatch({ type: "ADD_TO_ADDRESS", payload: {address} });
}

// remove item
const removeAddress = () => {
    dispatch({ type: "REMOVE_ADDRESS" });
  };

// // clear wishlist
// const clearWishList = () => {
//     dispatch({ type: CLEAR_WISHLIST });
//   };

  useEffect(() => {
    // dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("address", JSON.stringify(state.address));
  }, [state.address]);

  return (
    <AddressContext.Provider
      value={{ ...state, addToAddress, removeAddress }}
    >
      {children}
    </AddressContext.Provider>
  );

}

// make sure use
export const useAddressContext = () => {
    return useContext(AddressContext);
  };