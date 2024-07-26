import plusIcon from '../assets/images/plus.svg';

const Orders = () => {
  const orders = 25; // temporary

  return (
    <div className='content'>
      <div className='fs-2 fw-bold'>
        <img src={plusIcon} alt='Plus icon' /> Orders / {orders}
      </div>
    </div>
  );
};

export default Orders;
