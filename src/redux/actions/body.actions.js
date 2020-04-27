import { bodyConstants } from '../../constants';
import { bodyService } from '../services';

export const bodyActions = {
  generate,
  calculateDays,
};

function generate(data) {
  return dispatch => {
    dispatch(request(data));

    bodyService.generate(data)
      .then(
        data => { dispatch(success(data)) },
        error => { dispatch(failure(error.toString())) }
      );
  };

  function request(data) { return { type: bodyConstants.GENERATE_REQUEST, data } }
  function success(data) { return { type: bodyConstants.GENERATE_SUCCESS, data } }
  function failure(error) { return { type: bodyConstants.GENERATE_FAILURE, error } }
}

function calculateDays(data) {
  return dispatch => {
    dispatch(request(data));

    bodyService.calculateDays(data)
      .then(
        data => { dispatch(success(data)) },
        error => { dispatch(failure(error.toString())) }
      );
  };

  function request(data) { return { type: bodyConstants.CALCULATE_REQUEST, data } }
  function success(data) { return { type: bodyConstants.CALCULATE_SUCCESS, data } }
  function failure(error) { return { type: bodyConstants.CALCULATE_FAILURE, error } }
}
