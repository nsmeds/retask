import React from 'react';

const Todos = props => {

    console.log('props from Todos', props);

    let allTodos = props.todos.map((todo, index) => {
        // console.log(todo);
        return (
            <li key={index}>
                <label>
                    <span>{index + 1}</span>
                    <input autoFocus placeholder="New Todo" key={todo.id} id={todo.id} name="title" value={todo.title} onChange={props.handleInputChange} />
                    <input type="checkbox" id={index} name="completed" value={todo.completed} onChange={props.handleInputChange} />
                    <span>{todo.completed ? 'Completed' : 'Incomplete'}</span>
                    <button id={index} onClick={props.deleteTodo}>Delete</button>
                </label>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {allTodos}
            </ul>
            <button onClick={props.addTodo}>Add New</button>
        </div>
    )
}

export default Todos;