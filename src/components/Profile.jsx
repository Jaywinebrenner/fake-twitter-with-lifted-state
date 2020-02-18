
import React from "react";

function Profile(props){
var allProfile = {
  border: "solid lightgrey",
  borderWidth: "1px",
  borderColor: "lightgrey",
  width: "308px",
  height: "308px",
  marginTop: "20px"
}

var topDiv = {
height: '50%',
backgroundColor: "lightgrey"
}

var bottomDiv = {
height: '50%',
backgroundColor: "lightblue"
}

var clamManStyle= {
fontWeight: 'bold',
fontSize: '1.5rem',
marginLeft: '70px',
marginBottom: '30px'

}

var clamManTweets= {
marginTop: '160px',
fontSize: '1rem',
marginLeft: '5px',
lineHeight: '5rem',
wordSpacing: '20px'
}

var clamImage = {
width: '90px',
position: 'absolute',
left: '20px',
top: '200px'
}

  return (
    <div style={allProfile}>
      <img style={clamImage} src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Clams-CLAM-icon.png'/>
      <div style={topDiv}>
        <span></span>
      </div>
      <div style={bottomDiv}>
        <span style={clamManStyle}>Ocean Twitter</span>
        <br></br>

        <span style={clamManTweets}>Tweets Following Followers</span>

      </div>
    </div>
  );
}

export default Profile;
