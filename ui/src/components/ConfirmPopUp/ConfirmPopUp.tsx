import './index.css';

import type { TConfirmPopUpProps } from '../../shared/types';

const ConfirmPopUp = ({ message, onAccept, onDecline }: TConfirmPopUpProps) => {
  return (
    <>
      <div className='overlay' onClick={onDecline} />
      <div className='popup'>
        <p>{message}</p>
        <div>
          <button onClick={onDecline}>Cancel</button>
          <button onClick={onAccept}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmPopUp;
