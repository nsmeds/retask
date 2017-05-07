import React from 'react';
import ToggleComplete from './ToggleComplete';

const Todos = props => {

    let allTodos = [];

    // show tasks based on complete/incomplete toggle
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
                    <span className="index">{index + 1}</span>
                    <input autoFocus className="textbox" placeholder="New Todo" id={index} name="title" value={todo.title} onChange={props.handleInputChange} />
                </label>
                <label className="checkboxLabel">
                    <input type="checkbox" id={index} name="completed" checked={todo.completed} value={todo.completed} disabled={!enabled} onChange={props.handleInputChange} />
                </label>
                <button id={index} onClick={props.addTodo} className="hidden">Add</button>
                <button id={index} onClick={props.deleteTodo}>Delete</button>
            </li>
        )
    })

    return (
        <div className="container">
            <div className="optionsBar">
                <ToggleComplete {... props}/>
                <button onClick={props.addTodo}>Add New</button>
            </div>
            <form className="listWrap">
                <ul className="todoList">
                    {allTodos}
                </ul>
            </form>
            <button className={allTodos.length ? '' : 'hidden'} onClick={props.clearAll}>Clear All</button>
        </div>
    )
}

export default Todos;