import React from "react";

class NavBar extends React.Component {
render () {
    return (
<div>
<nav className="navbar fixed-top navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Click Game!</a>
  <p className="text-centere">You've guessed . . </p>
</nav>
<div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
    <br />
        <h1 className="display-4">Clicky Game!</h1>
        <hr />
    <p className="lead">Click and image below to earn points, but don't click on the same image twice or else you loose a point!</p>     
    </div>    
</div> 

</div>
    )
  } 
}

export default NavBar;