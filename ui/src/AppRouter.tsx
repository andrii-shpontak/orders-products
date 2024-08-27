import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ConfirmPopUp, NavigationMenu, TopMenu } from './components';
import { CreateOrder, OrdersPage, ProductsPage } from './pages';

import { AbsoluteRoutes } from './shared';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import React from 'react';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <TopMenu />
      <ConfirmPopUp />
      <div className='wrapper'>
        <NavigationMenu />
        <div className='content'>
          <Routes>
            <Route path={AbsoluteRoutes.orders} element={<OrdersPage />} />
            <Route path={AbsoluteRoutes.products} element={<ProductsPage />} />
            <Route path={AbsoluteRoutes.createOrder} element={<CreateOrder />} />
            <Route path={AbsoluteRoutes.createProduct} element={<CreateProduct />} />
            <Route path='*' element={<Navigate to={AbsoluteRoutes.orders} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
