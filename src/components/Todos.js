import React from 'react';

const Todos = props => {

    console.log('props from todos', props);

    const completedTodos = props.todos.filter(todo => todo.completed);
    const incompleteTodos = props.todos.filter(todo => !todo.completed);
    let allTodos = [];
    if (props.showComplete && props.showIncomplete) {
        allTodos = props.todos;
    } else if (!props.showComplete) {
        allTodos = props.todos.filter(todo => !todo.completed);
    } else if (!props.showIncomplete) {
        allTodos = props.todos.filter(todo => todo.completed)
    }

    allTodos = allTodos.map((todo, index) => {
        return (
            <li key={todo.id}>
                <label>
                    <span>{index + 1}</span>
                    <input autoFocus placeholder="New Todo" id={index} name="title" value={todo.title} onChange={props.handleInputChange} />
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
            <label>
                <span>View Completed</span>
                <input type="checkbox" checked={props.showComplete} name="showComplete" value={props.showComplete} onChange={props.toggleTodos} />
            </label>
            <label>
                <span>View Incomplete</span>
                <input type="checkbox" checked={props.showIncomplete} name="showIncomplete" value={props.showIncomplete} onChange={props.toggleTodos} />
            </label>
        </div>
    )
}

export default Todos;