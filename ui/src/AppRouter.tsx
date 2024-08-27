import { AnimatedRoute, ConfirmPopUp, FullScreenLoader, NavigationMenu, TopMenu } from './components';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { AbsoluteRoutes } from './shared';
import { AnimatePresence } from 'framer-motion';

const AppRouter: React.FC = () => {
  const location = useLocation();

  const CreateProduct = lazy(() => import('./pages/CreateProduct/CreateProduct'));
  const CreateOrder = lazy(() => import('./pages/CreateOrder/CreateOrder'));
  const OrdersPage = lazy(() => import('./pages/Orders/Orders'));
  const ProductsPage = lazy(() => import('./pages/Products/Products'));

  return (
    <>
      <TopMenu />
      <ConfirmPopUp />
      <div className='wrapper'>
        <NavigationMenu />
        <div className='content'>
          <AnimatePresence>
            <Suspense fallback={<FullScreenLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route
                  path={AbsoluteRoutes.orders}
                  element={
                    <AnimatedRoute>
                      <OrdersPage />
                    </AnimatedRoute>
                  }
                />
                <Route
                  path={AbsoluteRoutes.products}
                  element={
                    <AnimatedRoute>
                      <ProductsPage />
                    </AnimatedRoute>
                  }
                />
                <Route
                  path={AbsoluteRoutes.createOrder}
                  element={
                    <AnimatedRoute>
                      <CreateOrder />
                    </AnimatedRoute>
                  }
                />
                <Route
                  path={AbsoluteRoutes.createProduct}
                  element={
                    <AnimatedRoute>
                      <CreateProduct />
                    </AnimatedRoute>
                  }
                />
                <Route path='*' element={<Navigate to={AbsoluteRoutes.orders} />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AppRouter;
