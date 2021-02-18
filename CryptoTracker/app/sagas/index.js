import { all, takeLeading } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as currencySearchAsyncSaga from './currencySearchAsyncSaga';

export default function* watch() {
  yield all([currencySearchReq()]);
}

export function* currencySearchReq() {
  yield takeLeading(
    types.CURRENCY_SEACRH_REQUEST,
    currencySearchAsyncSaga.currencySearchAsyncSaga,
  );
}
