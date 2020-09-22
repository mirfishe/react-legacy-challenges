import React, { Component } from 'react';
import {Alert, Form, Button, Input, Row, Col} from 'reactstrap';
import TaskList from './TaskList';
 
class ToDoIndex extends Component {
  constructor(props) {
    super(props)
   this.state = {
     toDoList: [],
     task: {name: '', complete: false},
     newTask: '',
     statusForm: '',
     statusTask: '',
     errDeleteList: '',
     errTaskName: ''
   };

   this.setTaskName = this.setTaskName.bind(this);
   this.addTask = this.addTask.bind(this);
   this.completeTask = this.completeTask.bind(this);
   this.deleteToDoList = this.deleteToDoList.bind(this);
   this.clearAlertMessages = this.clearAlertMessages.bind(this);

 };

setTaskName(event) {

    this.setState({newTask: event.target.value});
    // console.log('setTaskName this.state.newTask', this.state.newTask);

    // this.setState({task: {name: this.state.newTask, complete: false}});
    this.setState({task: {name: event.target.value, complete: false}});
    // console.log('setTaskName this.state.task', this.state.task);

    // console.log('setTaskName this.state.toDoList', this.state.toDoList);

    this.clearAlertMessages();
    
  };

 addTask(event) {
    event.preventDefault();

    // console.log('addTask this.state.toDoList', this.state.toDoList);

    this.clearAlertMessages();

    if (this.state.newTask.length > 0) {

        let taskList = this.state.toDoList.slice();

        this.setState({task: {name: this.state.newTask, complete: false}});

        // taskList.push(this.state.newTask, false);
        taskList.push(this.state.task);
        this.setState({toDoList: taskList});
    
        // console.log('addTask this.state.toDoList', this.state.toDoList);
    
        this.setState({newTask: ''});
        this.setState({statusForm: 'Added new task.'});

    } else {

        this.setState({errTaskName: 'Please enter a new task.'});

    };

};

completeTask(index) {

    // console.log('completeTask index', index);

    this.clearAlertMessages();

    let taskList = this.state.toDoList.slice();

    for (let i = 0; i < taskList.length; i++) {
        if (index === i) {
            // console.log('completeTask Checked on checkbox', i);
            // console.log('completeTask taskList[i].name', taskList[i].name);
            // console.log('completeTask taskList[i].complete', taskList[i].complete);

            taskList[i].complete = !taskList[i].complete;
            this.setState({statusTask: 'Completed task ' + taskList[i].name + '.'});
        };
    };

    this.setState({toDoList: taskList});
    
  };

deleteToDoList(event) {
    event.preventDefault();

    // console.log('deleteToDoList this.state.toDoList', this.state.toDoList);

    this.clearAlertMessages();

    // let taskList = this.state.toDoList.slice();
    // while(taskList.length > 0) {
    //     taskList.pop();
    // };
    // taskList = [];
    this.setState({toDoList: []});

    // console.log('deleteToDoList this.state.toDoList', this.state.toDoList);

    this.setState({newTask: ''});
    this.setState({errDeleteList: 'Deleted to do list.'});

};

clearAlertMessages() {
    this.setState({statusForm: ''});
    this.setState({statusTask: ''});
    this.setState({errTaskName: ''});
    this.setState({errDeleteList: ''});
};

 render() {

  return (
     <Row>
       <Col>
       <h3>To Do List</h3>
       {this.state.errDeleteList !== '' ? <Alert color="danger">{this.state.errDeleteList}</Alert> : ''}
       {this.state.statusTask !== '' ? <Alert color="info">{this.state.statusTask}</Alert> : ''}
       <TaskList toDoList={this.state.toDoList} completeTask={this.completeTask} />
       {this.state.toDoList.length > 0 ? <Button size="sm" className="m-2" type="submit" color="danger" onClick={this.deleteToDoList}>Delete List</Button> : ''}
       </Col>
         <Col>
         <h3>Add Items</h3>
         <Form onSubmit={this.addTask}>
       <Input type="text" id="newTask" placeholder="New Task" value={this.state.newTask} onChange={this.setTaskName} />
       <Button size="sm" className="m-2" type="submit" color="primary">Add Task</Button>
       {this.state.errTaskName !== '' ? <Alert color="danger">{this.state.errTaskName}</Alert> : ''}
         {this.state.statusForm !== '' ? <Alert color="info">{this.state.statusForm}</Alert> : ''}
       </Form>
       </Col>
     </Row>
    );
  };

};

 
 export default  ToDoIndex;
