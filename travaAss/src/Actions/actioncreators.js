import {
	GET_DETAILS, GET_DETAILS_SUCCESS,
	GET_DETAILS_FAILURE, SUBMIT_REQUEST, SUBMIT_REQUEST_SUCCESS, SUBMIT_REQUEST_FAILURE
} from "./actionTypes"

export function getDetails(data) {
	return { type: GET_DETAILS, data }
}
export function getDetailsSuccess(data) {
	return { type: GET_DETAILS_SUCCESS, data }

}
export function getDetailsFailure(error) {
	return { type: GET_DETAILS_FAILURE, error }
}
export function submitRequest(submitDetails) {
	return {
		type: SUBMIT_REQUEST, submitDetails
	}
}
export function submitRequestSuccess(submitDetails) {
	return {
		type: SUBMIT_REQUEST_SUCCESS, submitDetails
	}
}
export function submitRequestFailure(error) {
	return {
		type: SUBMIT_REQUEST_FAILURE, error
	}
}