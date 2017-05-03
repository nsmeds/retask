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
                    completed: true
                },
                {
                    id: 1,
                    title: 'Make Dinner',
                    completed: true
                }
            ],
            handleInputChange: this.handleInputChange
        }
        
    }

    handleInputChange = event => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
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
