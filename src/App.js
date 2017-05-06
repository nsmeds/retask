import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            handleInputChange: this.handleInputChange,
            deleteTodo: this.deleteTodo,
            addTodo: this.addTodo,
            toggleTodos: this.toggleTodos,
            showComplete: true,
            showIncomplete: true
        };
        this.initialId = Math.floor(Math.random()*900000) + 100000;
    }

    componentDidMount() {
        let todos = JSON.parse(localStorage.getItem('todos'));
        this.setState({
            todos: todos,
        })
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
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    addTodo = event => {
        const todos = this.state.todos;
        // console.log(this.initialId);
        const newTodo = {
            id: this.initialId++,
            title: '',
            completed: false
        }
        todos.push(newTodo);
        this.setState({
            todos: todos
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo = event => {
        const target = event.target;
        const id = target.id;
        // console.log('id', id);
        const todos = this.state.todos;
        todos.splice(id, 1);
        this.setState({
            todos: todos
        })
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    toggleTodos = event => {
        const target = event.target;
        // console.log('target', target);
        const name = target.name;
        // console.log('name', name);
        const value = target.checked;
        this.setState({
            [name]: value
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
