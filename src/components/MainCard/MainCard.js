import React from "react";


const MainCard = (props) => {

    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>

        </div>

    )
}

export default MainCard;