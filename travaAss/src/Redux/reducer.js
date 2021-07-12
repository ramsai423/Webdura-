import { GET_DETAILS, GET_DETAILS_SUCCESS, SUBMIT_REQUEST, SUBMIT_REQUEST_SUCCESS } from "../Actions/actionTypes"

const intialState = { details: [], submitdetails: [], isLoading: false }

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case GET_DETAILS:
			return {
				...state,
				loading: true,
				details: action.data
			};
		case GET_DETAILS_SUCCESS:
			return {
				...state,
				loading: true,
				details: action.data
			};
		case SUBMIT_REQUEST:
			return {
				...state,
				request: true,
				submitdetails: action.submitDetails
			}
		case SUBMIT_REQUEST_SUCCESS:
			return {
				...state,
				request: true,
				submitDetails: action.submitDetails
			}
	}
}
export default reducer

