import React from "react";
// import Counter from "./Counter";

const image = {
    height: "225px",
    width: "225px",
    position: "relative",
    alignContent: "center",
    margin: "5px"
}

const MainCard = (props) => {
console.log(props.id)
    return (
       
    <img className="images" onClick={() => props.imageClick(props.id)} style={image} alt={props.id} src={props.image} />
    
    )
}

export default MainCard;