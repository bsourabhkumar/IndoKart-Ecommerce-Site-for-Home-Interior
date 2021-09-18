import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import {WishListProvider} from "./context/wishlist_context"
import {AddressProvider} from "./context/address_context"

// dev-cjy2h6ka.us.auth0.com
// 8P4ES9nRNrDetG8N7xundnamTGzBO3xU

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
    <AddressProvider>
    <WishListProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
      </WishListProvider>
      </AddressProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
