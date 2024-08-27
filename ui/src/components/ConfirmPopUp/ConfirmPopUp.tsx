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
        <>
          <div className='overlay' onClick={handleDecline} />
          <div className='popup'>
            <p>{popupState.message}</p>
            <div>
              <button onClick={handleDecline}>Cancel</button>
              <button onClick={handleAccept}>Delete</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmPopUp;
