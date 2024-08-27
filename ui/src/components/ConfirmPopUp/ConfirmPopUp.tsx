import './index.css';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import type { TConfirmPopUpProps } from '../../shared/types';
import { closePopup } from '../../redux/slices';

const ConfirmPopUp = () => {
  const popupState = useSelector((state: RootState) => state.popup as TConfirmPopUpProps);
  const dispatch = useDispatch();

  const handleAccept = () => {
    popupState?.onAccept();
    dispatch(closePopup());
  };

  const handleDecline = () => {
    popupState?.onDecline();
    dispatch(closePopup());
  };

  return (
    <>
      {popupState.isOpen && (
        <div className='popup'>
          <div className='popup__overlay' onClick={handleDecline} />
          <div className='popup__container'>
            <p className='popup__message'>{popupState.message}</p>
            <div className='popup__actions'>
              <button className='popup__button popup__button--cancel' onClick={handleDecline}>
                Cancel
              </button>
              <button className='popup__button popup__button--accept' onClick={handleAccept}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmPopUp;
