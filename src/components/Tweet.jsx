import React from 'react';
import PropTypes from 'prop-types';
import { FaFish } from 'react-icons/fa';

function Tweet(props) {


  function increaseFishCount(event) {
    props.onChangeFishCount(props.id)
  }

  var tweetBox = {
    textAlign: 'center',
    border: '2px solid black',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '300px'
  }
  return (
    <div style={tweetBox}>
    <h3> {props.title}</h3>
    <p>{props.body}</p>
    <a><FaFish onClick={increaseFishCount}/></a><span>{props.fishCount}</span>
    </div>
  );

}

Tweet.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Tweet;
