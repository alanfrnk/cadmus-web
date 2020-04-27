import { bodyConstants } from '../../constants';

export const initialState = {
  matrix: [],
  generatedAirports: [],
  generatedClouds: [],
  daysFirst: 0,
  days: 0,
}

export const body = (state = initialState, action) => {
  switch (action.type) {
    case bodyConstants.GENERATE_REQUEST:
      return { generating: true };
    case bodyConstants.GENERATE_SUCCESS:
      return {
        ...state,
        matrix: action.data.matrix,
        generatedAirports: action.data.generatedAirports,
        generatedClouds: action.data.generatedClouds,
      };
    case bodyConstants.GENERATE_FAILURE:
      return {};
    case bodyConstants.CALCULATE_REQUEST:
      return { calculating: true };
    case bodyConstants.CALCULATE_SUCCESS:
      return {
        ...state,
        matrix: action.data.matrix,
        daysFirst: action.data.daysFirst,
        days: action.data.days,
      };
    case bodyConstants.CALCULATE_FAILURE:
      return {};
    default:
      return state
  }
}