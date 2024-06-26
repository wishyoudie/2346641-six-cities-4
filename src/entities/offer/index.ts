import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { offersActions } from './model/slice';

export { OfferItem } from './ui/offer-item';
export { fetchOffers } from './api/fetch-offers';
export * from './api/offer-api';
export * from './model/slice';
export * from './model/types';

export const useOffersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(offersActions, dispatch);
};
