import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar'
import Add from "./add"
import { connect } from "react-redux";
import { getDetails, submitRequest } from "../Actions/actioncreators"
import UserDetails from "./userDetails"

class Services extends Component {
	componentDidMount() {
		this.props.dispatch(getDetails())
		this.props.dispatch(submitRequest())
	}
	render() {
		return (
			<div>
				<NavBar />
				<Add />
				{this.props.profile && (
					<UserDetails
						data={this.props.profile}
						request={this.props.request}
						user_time = {this.props.profile.upcoming_service} 
						type = "Upcoming Service"/>
				)}
				<div class="container">
					<div class="row">
						<button className="nav-bar"><Link to={'/service'} id="nav-link">Check in</Link></button>
						<div class="col" width="fit-content">
							<button className="nav-bar" onClick={this.onSubmit}><Link to={'/payments'} id="nav-link">Generate Invoice</Link></button></div>
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
			service: state.submitdetails,
			request: state.request
		};
	}
}
export default connect(mapStateToProps)(Services)

