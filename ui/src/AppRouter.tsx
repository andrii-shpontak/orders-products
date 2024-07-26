import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavigationMenu, TopMenu } from './components';
import { OrdersPage, ProductsPage } from './pages';

import { AbsoluteRoutes } from './shared';
import React from 'react';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <TopMenu />
      <div className='wrapper'>
        <NavigationMenu />
        <Routes>
          <Route path={AbsoluteRoutes.orders} element={<OrdersPage />} />
          <Route path={AbsoluteRoutes.products} element={<ProductsPage />} />
          <Route path='*' element={<Navigate to={AbsoluteRoutes.orders} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
