import * as types from './types';

export function currencySearchRequest() {
  return {
    type: types.CURRENCY_SEACRH_REQUEST,
  };
}

export function currencySearchFailed() {
  return {
    type: types.CURRENCY_SEACRH_FAILED,
  };
}

export function currencySearchResponse(response) {
  return {
    type: types.CURRENCY_SEACRH_RESPONSE,
    response,
  };
}


export function currencyAddRequest(currencyId) {
  return {
    type: types.CURRENCY_ADD_REQUEST,
    currencyId: currencyId,
  };
}

export function currencyAddFailed() {
  return {
    type: types.CURRENCY_ADD_FAILED,
  };
}

export function currencyAddResponse(response) {
  return {
    type: types.CURRENCY_REMOVE_RESPONSE,
    response,
  };
}

export function currencyRemoveRequest(currencyId) {
  return {
    type: types.CURRENCY_REMOVE_REQUEST,
    currencyId: currencyId,
  };
}

export function currencyRemoveFailed() {
  return {
    type: types.CURRENCY_REMOVE_FAILED,
  };
}

export function currencyRemoveResponse(response) {
  return {
    type: types.CURRENCY_REMOVE_RESPONSE,
    response,
  };
}
