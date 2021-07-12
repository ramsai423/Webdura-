import { takeLatest, all, take } from "redux-saga/effects";
import { submitRequest } from "../Actions/actioncreators";
import { GET_DETAILS, GET_DETAILS_SUCCESS, GET_DETAILS_FAILURE, SUBMIT_REQUEST, } from "../Actions/actionTypes";
import { getdetails, getrequest } from "./customer"
export function* detailsSaga() {
	yield all([takeLatest(GET_DETAILS, getdetails),
	]);

}