import React from "react";
import{Link} from 'react-router-dom';
import './LandingPage.css'


export default function LandingPage(){
    return(
        <div className ="landing-page">
            <h1 className = 'app1'> Welcome </h1>
            {/* <h2 className = 'app2'> to my PI</h2> */}
            <Link to ='/home'>
                <button className='btn'> Go to travell </button>
            </Link>
        </div>
    )
}