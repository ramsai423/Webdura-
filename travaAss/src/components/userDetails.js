import React, { Component } from 'react'

import image from '../images/man.jpg'
import hand from "../images/shakehand.png"



export default class UserDetails extends Component {
	render() {
		const { firstName, city, deals, address, availableDate, time, price } = this.props.data
		const user_time = this.props.user_time
		const type =  this.props.type
		const circle = <i class="bi bi-circle-fill"></i>
		const line = <i class="bi bi-dash-lg"></i>
		const activecircle = <i id="active" class="bi bi-circle-fill"></i>
		const activeline = <i id="active"class="bi bi-dash-lg"></i>
		return (

			<div class="container">
				{!this.props.payment && (
					<div class="row">
						<div class="col">
						<a id="pending">{type}</a>
							<a className="city">{user_time}</a>
						</div>
						{this.props.request ? (
							<p id="text" margin-top="0">{activecircle}{activeline}{activeline}{circle}{line}{line}{circle}
							</p>) :
							<p id="text" margin-top="0">{circle}{line}{line}{line}{circle}{line}{line}{circle}</p>
						}
					</div>
				)}
				{this.props.payment && (
					<div class="row">
					<div class="col">
					<a id="pending">{type}</a>
						<a className="city">{user_time}</a>
					</div>
						<p id="text" margin-top="0">{activecircle}{activeline}{activeline}{activecircle}{activeline}{activeline}{circle}</p>									</div>
				)}
				<div class="row">
					<div>
						<img src={image} class="rounded-circle" alt="Cinque Terre" width="40" height="40"></img>
					</div>
					<div class="col">
						<a id="name">{firstName}</a>
						<a className="city"> {city}</a>
					</div>
					<div>
						<img src={hand} class="rounded-circle" alt="Cinque Terre" width="40" height="40"></img>
					</div>
					<div class="col">
						<a className="city">you have {deals} dealswith him</a>
					</div>
				</div>
				{!this.props.payment && (
					<div class="row">
						{this.props.request ? (
							<p id="text" margin-top="0">Check in here or scan customers QR to check with the service is about to start</p>) :
							<p id="text" margin-top="0">This customer is available at</p>
						}
					</div>
				)}
				{this.props.payment && (
					<div class="row">
						<p id="text" margin-top="0">Service is complete,please confirm payment amount:</p>
						<a id="city" class="bi bi-receipt">Invoice item:</a>
						<div class="row">
							<a id="city">Session price</a>
							<a id="price">{price}</a>
						</div></div>
				)}
				{!this.props.payment && (
					<div class="row">
						<a className="city" class="bi bi-alarm">{availableDate}</a>
						<div class="col">
							<a className="city">{time}</a>
						</div>
					</div>)}
				{!this.props.payment && (
					<a class="row">{address.map((key) => {
						return (
							<p class="bi bi-geo-alt" id="name">{key.streetAddress},{key.city},{key.state},{key.postalCode}</p>
						)
					})}</a>)}
			</div>
		)
	}
}   