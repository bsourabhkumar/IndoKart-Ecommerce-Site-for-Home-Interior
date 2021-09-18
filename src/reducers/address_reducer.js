

const address_reducer = (state, action) => {
    if (action.type === "ADD_TO_ADDRESS") {
      const { address } = action.payload;
    //   const tempItem = state.wishlist.find((i) => i.id === id );
     
        const newItem = address;
          
        return { address: {...newItem} };
      
    }

    if (action.type === "REMOVE_ADDRESS") {
        
        return { address: { } };
      }

      throw new Error(`No Matching "${action.type}" - action type`);
    }


    export default address_reducer;