import React, { Component } from 'react'
import download from '../images/download.png'
import { getDetails} from "../Actions/actioncreators"
import { connect } from "react-redux";

class Add extends Component {
	componentDidMount() {
		this.props.dispatch(getDetails())
	}
	render() {
		const price = '$80'
		return (
			<div className="card">
				<div class="container">
					<div class="row">
						<div class="col-4">
							<img id="img-load" src={download} />
						</div>
						<div class="col">
							<p className="main-text">Yoga and Pilate Trainig</p>
							<p>TRAINING and FITNESS</p>
							<p>This yoga and pilate training sessions is designed for all levels of traines...</p>
							<div class="row">
								<p id="text">For one Session:</p>
								<div class="col">
									<p id="price">{price}</p></div></div>
								<span class="dots"></span>
								<span class="dot"></span>
						</div>
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
export default connect(mapStateToProps)(Add)

