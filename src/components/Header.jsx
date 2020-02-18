import React from "react";
import { Link } from 'react-router-dom';

function Navbar(props){
  var navbarStyles = {
    border: "solid lightgrey",
    borderWidth: "1px",
    padding: "10px 20px",
    textAlign: "left",
    color: "grey",
    float: "left",
    marginBottom: "30px"
  }
  var searchStyle = {
    border: "solid lightskyblue",
    padding: "5px 150px 5px 10px",
    borderRadius: "30px",
    float: "right",
    margin: "0px 50px 0px 0px",
    color: "grey"
  }

  var tweetStyle = {
    border: "solid lightskyblue",
    padding: "5px 20px ",
    borderRadius: "30px",
    float: "right",
    color: "grey"
  }

  var hrStyle = {
    border: "1px solid lightgrey",
    margin: "60px 0"
  }

  return (
    <div>
      <Link to="/" style={navbarStyles}>Home</Link>
      <span style={navbarStyles}>Notifications</span>
      <span style={navbarStyles}>Messages</span>
      <Link to="/newtweet"style={tweetStyle}>Tweet</Link>
      <span style={searchStyle}>Search</span>
    </div>
  );
}

export default Navbar;
