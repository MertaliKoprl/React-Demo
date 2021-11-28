import React from "react";
import logo from '../styles/unsplash-icon.PNG';


function Detail(props) {

    //console.log(props.location.state)
    const pic = props.location.state.image
    const picDescrip= pic.alt_description;
    var logoUrl = "https://unsplash.com/s/photos/" + picDescrip;
    return (

        <div classnName="card--list">

            <div className="card" key={pic.id} >
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                    width="20%"
                    height="20%"


                ></img>
                <div className="card-detail">
                    <div>
                        <h1>Creator : {pic.user.username}</h1>
                    </div>
                    <hr />
                    <div className="bioField">
                        <h1>Bio : {pic.user.bio}</h1>
                    </div>

                    <div><a href={pic.user.portfolio_url}><h1>{pic.user.portfolio_url}</h1> </a></div>
                    <hr />
                    <div><h1>Image Id : {pic.id} </h1></div>
                    <div> <h1>Description : {pic.alt_description}</h1></div>
                    <div><h1> Like :  {pic.likes} 🐑 </h1></div>
                    <hr />
                    <div><h1>Search on Unsplash <a href={logoUrl}><img src={logo} /></a> </h1></div>
                  
                </div>

            </div>

        </div>
    );


}

export default Detail;