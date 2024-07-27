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
        <div className='content'>
          <Routes>
            {/* 2 routes but 1 page, because I don't understand test task */}
            <Route path={AbsoluteRoutes.orders} element={<OrdersPage />} />
            <Route path={AbsoluteRoutes.products} element={<ProductsPage />} />
            <Route path='*' element={<Navigate to={AbsoluteRoutes.orders} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
