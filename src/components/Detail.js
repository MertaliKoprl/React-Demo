import React from "react";

function Detail(props) {

    console.log(props.location.state)
    const pic = props.location.state.image

    return (
        <>

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

                       <div className="bioField">
                            <h1>{pic.user.bio}</h1>
                        </div>

                        <div><h1>{pic.user.portfolio_url}</h1> </div>

                        <div><h1>Image Id : {pic.id} </h1></div>
                        <div> <h1>Description : {pic.alt_description}</h1></div>
                        <div><h1> 🐑 {pic.likes} </h1></div>
                    </div>

                </div>

            </div>
        </>
    );


}

export default Detail;