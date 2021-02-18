import { put, call } from 'redux-saga/effects';
import * as currencyActions from '../actions/currencyActions';
import {
  searchCurrency,
} from '../api/methods/searchCurrencyApi';
import { ServerRequest } from '../constant'

export function* currencySearchAsyncSaga(action) {
  const responses = yield call(searchCurrency);
  let responseStatusCode = true;
  if (
    responses.httpStatusCode == ServerRequest.UNAUTHORIZED ||
    responses.httpStatusCode == ServerRequest.BAD_GATEWAY ||
    responses.httpStatusCode == ServerRequest.BAD_REQUEST
  ) {
    responseStatusCode = false;
  } else {
    responseStatusCode = true;
  }
  const response = { success: responseStatusCode, data: responses };
  if (response.success) {
    yield put(currencyActions.currencySearchResponse(response.data.data));
  } else {
    yield put(currencyActions.currencySearchFailed());
    setTimeout(() => {
      const error = response.data;
    }, 200);
  }
}
