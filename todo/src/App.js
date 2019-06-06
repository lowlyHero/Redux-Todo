import React, { Component } from 'react';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Grocery Shopping'},
            {id: 2, content: 'Play Mario Kart'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = Date.now();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }
    render() {
    return (
      <div className='App container'>
          <h1>Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;