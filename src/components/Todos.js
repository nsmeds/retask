import React from 'react';

const Todos = props => {

    console.log('props from Todos', props);

    let allTodos = props.todos.map((todo, index) => 
        <li key={index}>
            <input key={todo.id} name="title" value={todo.title} onChange={props.handleInputChange} />
        </li>
    )

    return (
        <ul>
            {allTodos}
        </ul>
    )
}

export default Todos;