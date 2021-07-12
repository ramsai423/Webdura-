import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import tarva from "../src/images/trava.jpg"

import "./App.css";
const NavBar = () => {
	return (
		<div>
			<div>
				<div>
					<div class="container">
						<div class="row">
							<div class="col"><i class="bi bi-list"></i></div>
							<div class="col"><i class="bi bi-search"></i></div>
							<img src={tarva} width="40" height="40"></img>
							<div class="col"><i class="bi bi-chat"></i></div>
							<div class="col"><i class="bi bi-bell"></i></div>
						</div>
					</div>
					<center className="navbar">
						<i class="bi bi-chevron-left" id="nav-link"></i>
						<NavLink to="/request" id="nav-link">Request</NavLink>
						<NavLink to="/service" id="nav-link">Services</NavLink>
						<NavLink to="/payments" id="nav-link">Payments</NavLink>
					</center>
				</div>
			</div>
		</div>
	);
}
export default NavBar;