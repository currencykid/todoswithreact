import React from 'react'; 
import CreateTodo from './create-todo';
import TodosList from './todos-list'; 

const todos = [
  {
    task: 'make cookies',
    isCompleted: true
  },
  {
    task: 'go to school',
    isCompleted: false
  }
]

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // in es5 this is todos: todos
      todos
    };
  }

  render (){
    return (
      <div>
      <h1>React todos app </h1>
      <CreateTodo createTask = {this.createTask.bind(this)}/> 
      <TodosList 
        todos={this.state.todos}
        toggleTask = {this.toggleTask.bind(this)}      
        saveTask = {this.saveTask.bind(this)}
        deleteTask= {this.deleteTask.bind(this)}
        /> 
      </div>
    );
  }

  toggleTask(task){
   const foundTodo = _.find(this.state.todos, todo => todo.task === task ) ;
   foundTodo.isCompleted = !foundTodo.isCompleted; 
   this.setState({ todos: this.state.todos }); 
  }

  createTask(task){
   this.state.todos.push({
    task,
    isCompleted: false
   }); 
   this.setState({ todos : this.state.todos }); 
  }

  saveTask(oldTask, newTask){
   const foundTodo = _.find(this.state.todos, todo => todo.task === oldtask ) ;

   foundTodo.task = newTask; 
   this.setState({ todos: this.state.todos }); 
  }

  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete); 
    this.setState({ todos: this.state.todos }) ; 
  }
}
