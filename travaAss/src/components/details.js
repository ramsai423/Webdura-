import React, {useState } from 'react'
import { getDetails } from "../Actions/actioncreators"
import { connect } from "react-redux";
import {Link } from 'react-router-dom';

const Details = (props) => {
	const [data, setData] = useState({
		userName: '',
		email: '',
		number: 0,
	});
	const { userName, email, number } = data
	const handler = e => {
		setData({ ...data, [e.target.name]: [e.target.value] })
	}
	const submitHandler = e => {
		e.preventDefault();
		props.dispatch(getDetails(data));
	}

	return (
		<div>
			<center>
				<form onSubmit={submitHandler}>
					name
						<input type="text" placeholder="userName"required value={userName} name="userName"
						onChange={handler}></input><br /><br />
										email
										<input type="email" placeholder="email" value={email} name="email"
						onChange={handler}></input><br /><br />
										number
										 <input type="number" placeholder="number" value={number} name="number"
						onChange={handler}></input><br /><br />

					<button type='button' onClick={submitHandler}>
						<Link to={'/request'}>Submit</Link>
					</button>
				</form>
			</center>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		profile: state
	};
};
export default connect(mapStateToProps)(Details)
