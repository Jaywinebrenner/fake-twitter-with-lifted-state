import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTweetForm(props){
  let _title = null;
  let _body = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    props.onNewTweetCreation({title: _title.value, body: _body.value, id: v4()});
    _title.value = '';
    _body.value = '';
  }

  const formStyle = {
    textAlign: 'center',
    border: '2px solid black',
    backgroundColor: "lightblue",
    width: '300px'

  }
  return (
    <div>
      <form style={formStyle} onSubmit={handleNewTweetFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Tweet Title'
          ref={(input) => {_title = input;}}/>
        <br></br>
        <br></br>
        <textarea
          id='body'
          placeholder='Your tweet goes here.'
          ref={(textarea) => {_body = textarea;}}/>
          <br></br>
        <button type='submit'>Tweet it!</button>
      </form>
    </div>
  );
}

NewTweetForm.propTypes = {
onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;
