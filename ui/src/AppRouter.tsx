import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { OrdersPage, ProductsPage } from './pages';

import React from 'react';
import { NavigationMenu } from './components';
import { AbsoluteRoutes } from './shared';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path={AbsoluteRoutes.orders} element={<OrdersPage />} />
        <Route path={AbsoluteRoutes.products} element={<ProductsPage />} />
        <Route path='*' element={<Navigate to={AbsoluteRoutes.orders} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
