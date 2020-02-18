import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';



function TweetList(props){
  return (
    <div>
      {props.tweetList.map((tweet) =>
        <Tweet title={tweet.title}
          body={tweet.body}
          key={tweet.id}/>
      )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
