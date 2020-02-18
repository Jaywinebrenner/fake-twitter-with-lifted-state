import React from 'react';
import thumb from '../assets/thumb.png';
import { FaFish } from 'react-icons/fa';


class OtherPeeps extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    fishCount: 0
  };
  this.increaseFishCount = this.increaseFishCount.bind(this);
}

increaseFishCount(event) {
  let newFishCount = this.state.fishCount + 1
  this.setState({fishCount: newFishCount});
}

// var peepsBox = {
//   textAlign: 'center',
//   border: '2px solid black',
//   borderRadius: '5px',
//   marginBottom: '20px',
//   width: '300px'
// }
//
//
//   var fishIcon = {
//     width: '100px'
//   }

  render(){
  return (
    <div>
    <h2>What the Mateys Are Sayin'</h2>
    <div>
    <h3 >Barnacle Bill</h3>
    <h4>KIDS THESE DAYS!!!!!!!</h4>
    <p>I mean they don't know anything. And I know EVERYTHING.</p>
    <a><FaFish onClick={this.increaseFishCount}/></a><span>{this.state.fishCount}</span>
    </div>

    </div>
  );
}
}


export default OtherPeeps;
