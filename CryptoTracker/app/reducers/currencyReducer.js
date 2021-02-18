import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  currencySearchRes: [],
  addedCurrencyData: [],
};

export const currencyReducer = createReducer(initialState, {
  [types.CURRENCY_SEACRH_REQUEST](state, action) {
    return {
      ...state,
    };
  },

  [types.CURRENCY_SEACRH_RESPONSE](state, action) {
    return {
      ...state,
      currencySearchRes: action.response,
    };
  },
  [types.CURRENCY_SEACRH_FAILED](state) {
    return {
      ...state,
    };
  },

  [types.CURRENCY_ADD_REQUEST](state, action) {
    return {
      ...state,
      addedCurrencyData: state.addedCurrencyData.concat(action.currencyId),
    };
  },

  [types.CURRENCY_ADD_RESPONSE](state, action) {
    return {
      ...state,
      currencySearchRes: action.response,
    };
  },
  [types.CURRENCY_ADD_FAILED](state) {
    return {
      ...state,
    };
  },

  [types.CURRENCY_REMOVE_REQUEST](state, action) {
    const valueToRemove = action.currencyId;
    const filteredItems = state.addedCurrencyData.filter(function(item) {
      return item !== valueToRemove;
    });

    return {
      ...state,
      addedCurrencyData: filteredItems,
    };
  },

  [types.CURRENCY_REMOVE_RESPONSE](state, action) {
    return {
      ...state,
      currencySearchRes: action.response,
    };
  },
  [types.CURRENCY_REMOVE_FAILED](state) {
    return {
      ...state,
    };
  },
});
