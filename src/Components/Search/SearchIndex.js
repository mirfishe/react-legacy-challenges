import React, { Component } from 'react';
import {Input} from 'reactstrap';
import Results from './Results';
 
class SearchIndex extends Component {
  constructor(props) {
    super(props)
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm: '',
     results: []
   };

   this.searchFunction = this.searchFunction.bind(this);

 };

 searchFunction(event) {
  this.setState({searchTerm: event.target.value});
  // console.log('this.state.searchTerm', this.state.searchTerm);

  var searchResults = [];
  
  for (let i = 0; i < this.state.things.length; i++) {
      // console.log('this.state.things[i]', this.state.things[i]);
      if (this.state.things[i].includes(this.state.searchTerm)) {
        searchResults.push(this.state.things[i]);
      };
  };

  this.setState({results: searchResults});

};



 render() {

  return (
     <div>
       <Input type="text" id="search" placeholder="Search Here" value={this.state.searchTerm}  onChange={this.searchFunction} />
       <h3>Results:</h3>
       <Results results={this.state.results}  />
     </div>
    );
  };

};

 
 export default  SearchIndex;
