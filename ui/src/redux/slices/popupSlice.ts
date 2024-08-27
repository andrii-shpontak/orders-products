import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { TConfirmPopUpProps } from '../../shared/types';

const initialState: TConfirmPopUpProps = {
  isOpen: false,
  message: '',
  onAccept: () => {},
  onDecline: () => {},
};

const confirmPopUpSlice = createSlice({
  name: 'confirmPopUp',
  initialState,
  reducers: {
    setPopupValue: (state, action: PayloadAction<TConfirmPopUpProps>) => action.payload,
    closePopup: () => initialState,
  },
});

export const { setPopupValue, closePopup } = confirmPopUpSlice.actions;
export default confirmPopUpSlice.reducer;
