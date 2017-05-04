import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 0,
                    title: 'Take Out The Trash',
                    completed: false
                },
                {
                    id: 1,
                    title: 'Make Dinner',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Hang Out',
                    completed: false
                }
            ],
            handleInputChange: this.handleInputChange,
            deleteTodo: this.deleteTodo,
        }
    }


    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const id = target.id;
        const todos = this.state.todos;
        console.log('todos from handleInputChange', todos);
        todos[id][name] = value;
        
        this.setState({
            todos
        })
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
