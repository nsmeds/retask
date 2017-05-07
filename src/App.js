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
            clearAll: this.clearAll,
            showComplete: true,
            showIncomplete: true
        };
        this.initialId = Math.floor(Math.random()*900000) + 100000;
    }

    componentDidMount() {
        let todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            this.setState({
                todos: todos,
            })
        }
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
        event.preventDefault();
        const todos = this.state.todos;
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
        const todos = this.state.todos;
        todos.splice(id, 1);
        this.setState({
            todos: todos
        })
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    toggleTodos = event => {
        const target = event.target;
        const name = target.name;
        const value = target.checked;
        this.setState({
            [name]: value
        })
    }

    clearAll = event => {
        event.preventDefault();
        this.setState({
            todos: []
        });
        localStorage.removeItem('todos');
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