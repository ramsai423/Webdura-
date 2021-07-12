import { put } from "redux-saga/effects";
import { getDetails, getDetailsFailure, getDetailsSuccess } from "../Actions/actioncreators"
import request from "../jsons/request.json"


export function* getdetails() {
	
	try {
		let responce = request
		yield put(getDetailsSuccess(responce));
	} catch (err) {
		yield put(getDetailsFailure("error"));

	}
};