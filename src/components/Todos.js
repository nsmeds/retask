import React from 'react';
import ToggleComplete from './ToggleComplete';

const Todos = props => {

    // console.log('props from todos', props);

    // const completedTodos = props.todos.filter(todo => todo.completed);
    // const incompleteTodos = props.todos.filter(todo => !todo.completed);
    let allTodos = [];
    if (props.showComplete && props.showIncomplete) {
        allTodos = props.todos;
    } else if (!props.showComplete && props.showIncomplete) {
        allTodos = props.todos.filter(todo => !todo.completed);
    } else if (!props.showIncomplete && props.showComplete) {
        allTodos = props.todos.filter(todo => todo.completed)
    }

    allTodos = allTodos.map((todo, index) => {

        const enabled = todo.title.length > 0; // disable 'complete/incomplete' checkbox if no text.

        return (
            <li key={todo.id}>
                <label>
                    <span>{index + 1}</span>
                    <input autoFocus placeholder="New Todo" id={index} name="title" value={todo.title} onChange={props.handleInputChange} />
                    <input type="checkbox" id={index} name="completed" checked={todo.completed} value={todo.completed} disabled={!enabled} onChange={props.handleInputChange} />
                    <span>{todo.completed ? 'Completed' : 'Incomplete'}</span>
                    <button id={index} onClick={props.deleteTodo}>Delete</button>
                </label>
            </li>
        )
    })


    return (
        <div className="listContainer">
            <div className="optionsBar">
                <ToggleComplete {... props}/>
                <button onClick={props.addTodo}>Add New</button>
            </div>
            <ul className="todoList">
                {allTodos}
            </ul>
        </div>
    )
}

export default Todos;