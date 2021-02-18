import Api from '../index';
import ApiConstants from '../ApiConstants';

export function searchCurrency() {
  return Api(ApiConstants.SEARCH, null, 'GET', null);
}
