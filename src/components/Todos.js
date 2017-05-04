import React from 'react';

const Todos = props => {

    console.log('props from Todos', props);

    let allTodos = props.todos.map((todo, index) => {
        console.log(todo);
        return (
            <li key={index}>
                <label>
                    <span>{index + 1}</span>
                    <input key={todo.id} id={todo.id} name="title" value={todo.title} onChange={props.handleInputChange} />
                    <input type="checkbox" id={todo.id} name="completed" value={todo.completed} onChange={props.handleInputChange} />
                    <span>{todo.completed ? 'Completed' : 'Incomplete'}</span>
                </label>
            </li>
        )
    })

    return (
        <ul>
            {allTodos}
        </ul>
    )
}

export default Todos;