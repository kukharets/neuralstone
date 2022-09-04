import { PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch } from '../redux/store';

export const deferredDispatch = (action: PayloadAction<any>, dispatch: AppDispatch) => {
  window.addEventListener(
    'click',
    () => {
      dispatch(action);
    },
    { once: true },
  );
};
