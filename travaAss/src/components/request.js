import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../NavBar'
import Add from "./add"
import { connect } from "react-redux";
import { getDetails, submitRequest } from "../Actions/actioncreators"
import UserDetails from "./userDetails"

class Request extends Component {

	componentDidMount() {
		this.props.dispatch(getDetails())
	}
	onSubmit = (e) => {
		const { availableDate, time } = this.props.profile
		const timeDate = { availableDate, time }
		this.props.dispatch(submitRequest(timeDate))
	}
	render() {
		return (
			<div>
				<NavBar />
				<Add />
				{this.props.profile && (
					<UserDetails
						data={this.props.profile}
						user_time = {this.props.profile.pending} 
						type = "Pending Request"/>
				)}
				<div class="container">
					<div class="row">
						<button className="nav-bar"><Link to={'/'} id="nav-lin">Reshedule</Link></button>
						<div class="col" width="fit-content">
							<button className="nav-bar" onClick={this.onSubmit}><Link to={'/service'} id="nav-link">Accept Request</Link></button></div>
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
export default connect(mapStateToProps)(Request)
