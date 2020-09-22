import React from 'react';
import {Input} from 'reactstrap';
 
const TaskList = (props) => {

 return (
   <ul>
     {props.toDoList.length > 0 ? props.toDoList.map((task, index) => 
     <li key={index}><Input type="checkbox" onChange={() => props.completeTask(index)} defaultChecked={task.complete} />{task.name}
     </li>) : ''}
   </ul>
 )
}
 
export default TaskList;
