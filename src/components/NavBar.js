import React from "react";
// import MainCards from "./MainCards.css";
// import Counter from "./Counter";

const navStyle = {
    fontColor: "#ffffff",
    // fontWeight: "bold",
}


const NavBar = (props) => {
    return (
<div>
<nav className="navbar fixed-top navbar-dark text-white bg-dark" style={navStyle}>
<div className="d-flex justify-content-start bd-highlight" style={navStyle}>
  <div className="d-md-inline-flex bd-highlight" style={navStyle}>
  <a className="navbar-brand" href="/">Clicky Card Game!</a>
  </div>
  </div>
  <div className="d-flex justify-content-start bd-highlight" style={navStyle}>
  <div className="d-md-inline-flex justify-content-center bd-highlight" style={navStyle}>
  <h3 className="text-center" style={navStyle} >SCORE: {props.count} | TOP SCORE: </h3></div>
  </div>
  <div className="d-flex justify-content-start bd-highlight" style={navStyle}>
  <div className="d-md-inline-flex justify-content-end bd-highlight" style={navStyle}>
  <span className="float-right" style={navStyle}>
      Navbar text with an inline element</span></div>
</div>
</nav>

<div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
    <br />
        <h1 className="display-4">Clicky Card Game!</h1>
        <hr />
    <p className="lead">Click and image below to earn points, but don't click on the same image twice or else you loose a point!</p>     
    </div>    
</div> 



<br />


</div>
    )
  } 


export default NavBar;