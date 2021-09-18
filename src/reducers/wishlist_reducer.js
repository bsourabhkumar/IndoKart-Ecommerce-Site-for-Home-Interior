import {
    ADD_TO_WISHLIST,
    REMOVE_WISHLIST_ITEM,
    CLEAR_WISHLIST,
    } from "../actions";

    const wishlist_reducer = (state, action) => {
        if (action.type === ADD_TO_WISHLIST) {
          const { id,  product } = action.payload;
          const tempItem = state.wishlist.find((i) => i.id === id );
          if (tempItem) {
            
            return { ...state };
          } else {
            const newItem = product;
              
            return { wishlist: [...state.wishlist, newItem] };
          }
        }

        if (action.type === REMOVE_WISHLIST_ITEM) {
            const tempWishList = state.wishlist.filter((item) => {
              return item.id !== action.payload;
            });
            return { ...state, wishlist: tempWishList };
          }


        if (action.type === CLEAR_WISHLIST) {
            return { ...state, wishlist: [] };
        }

        throw new Error(`No Matching "${action.type}" - action type`);
    }


    export default wishlist_reducer;