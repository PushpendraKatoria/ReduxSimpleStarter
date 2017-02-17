import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    // return <input onChange = {this.onInputChange} />;
    return (
      <div>
      <input onChange = {(event)=>this.setState({term:event.target.value})} />
      </div>
    )
    //Change is the event on input
  }

  // onInputChange(event) {
  //   //any variable name can be used for event
  //   console.log(event);
  // }
}

export default SearchBar;
