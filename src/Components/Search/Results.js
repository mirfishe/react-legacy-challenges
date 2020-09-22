import React from 'react';
 
const Results = (props) => {
 return (
   <ul>
     {props.results.length > 0 ? props.results.map((item, index) => <li key={index}>{item}</li>) : ""}
   </ul>
 )
}
 
export default Results;
