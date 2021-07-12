import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image from '../images/trava.jpg'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <center>
                <img src={image} class="rounded-circle" alt="Cinque Terre" width="100" height="100"></img>
                    <h4>Welcome to trava </h4><br/>
                    <h6>click here to see the <Link to ={"/request"}>Request</Link></h6>

                </center>
            </div>
        )
    }
}
