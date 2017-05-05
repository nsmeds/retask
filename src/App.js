import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            handleInputChange: this.handleInputChange,
            deleteTodo: this.deleteTodo,
            addTodo: this.addTodo,
        };
        this.initialId = Math.floor(Math.random()*900000) + 100000;
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const index = target.id;
        const todos = this.state.todos;
        todos[index][name] = value;
        
        this.setState({
            todos
        })
    }

    addTodo = event => {
        const todos = this.state.todos;
        console.log(this.initialId);
        const newTodo = {
            id: this.initialId++,
            title: '',
            completed: false
        }
        todos.push(newTodo);
        this.setState({
            todos: todos
        });
    }

    deleteTodo = event => {
        const target = event.target;
        const id = target.id;
        console.log('id', id);
        const newTodos = this.state.todos;
        newTodos.splice(id, 1);
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="App">
                <h1>RETASK</h1>
                <h2>A To-Do Application built with React</h2>
                <Todos {... this.state} />
            </div>
        );
    }
}

export default App;
