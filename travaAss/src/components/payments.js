import React, { Component } from 'react'
import NavBar from '../NavBar'
import {Link } from 'react-router-dom';
import Add from "./add"
import { connect } from "react-redux";
import { getDetails } from "../Actions/actioncreators"
import UserDetails from "./userDetails"

class Payments extends Component {
	componentDidMount() {
		this.props.dispatch(getDetails())
	}
	render() {
		const payment = true
		return (
			<div>
				<NavBar />
				<Add />
				{this.props.profile && (
					<UserDetails
						data={this.props.profile}
						payment={payment}
						user_time = {this.props.profile.pending_time} 
						type = "Pending Payment" />
				)}
				<div class="container">
					<div class="row">
						<button className="nav-bar"><Link to={'/payments'} id="nav-lin">Start a chart</Link></button>
						<div class="col" width="fit-content">
							<button className="nav-bar" onClick={this.onSubmit}><Link to={'/thankyou'} id="nav-link">Resend invoice</Link></button></div>
						<div class="col6" id="name"><Link><i class="bi bi-three-dots"></i>More</Link></div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	if (state) {
		return {
			profile: state.details,
		};
	}
}
export default connect(mapStateToProps)(Payments)
