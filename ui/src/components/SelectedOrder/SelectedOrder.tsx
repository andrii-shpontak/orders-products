import './index.css';

import { AnimatePresence, motion } from 'framer-motion';

import ProductsList from '../ProductsList/ProductsList';
import type { TSelectedOrderProps } from '../../shared/types';
import closeIcon from '../../assets/icons/closeIcon.svg';

const SelectedOrder = ({ selectedOrder, handleClose }: TSelectedOrderProps) => {
  if (!selectedOrder) return <></>;

  return (
    <AnimatePresence>
      <motion.div
        key='selected-order'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className='selected-order'>
        <button className='selected-order__close-button' onClick={handleClose}>
          <img src={closeIcon} alt='Close icon' className='selected-order__close-icon' />
        </button>
        <h2 className='selected-order__title'>{selectedOrder.title}</h2>
        <ProductsList products={selectedOrder.products} />
      </motion.div>
    </AnimatePresence>
  );
};

export default SelectedOrder;
