import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image from '../images/trava.jpg'


export default class Thankyou extends Component {
    render() {
        return (
            <div>
            <center>
            <img src={image} class="rounded-circle" alt="Cinque Terre" width="100" height="100"></img>
                <h4>You invoice has been send successfully to your Email</h4><br/>
                <h6>Thank You</h6>
                <h6>click Here to see for more <Link to ={"/request"}>Request</Link></h6>

            </center>
        </div>
        )
    }
}
