import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from "@shopify/hydrogen";
import {Suspense} from 'react';

function App() {
  return (
    <>
      <ShopifyProvider>
        <CartProvider>
          <Router>
            <FileRoutes />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </>
  );
}

export default renderHydrogen(App);
