import React from 'react';

const ToggleComplete = props => {

    return (
        <div>
            <label className="checkboxLabel">
                <span>View Completed</span>
                <input type="checkbox" checked={props.showComplete} name="showComplete" value={props.showComplete} onChange={props.toggleTodos} />
            </label>
            <label className="checkboxLabel">
                <span>View Incomplete</span>
                <input type="checkbox" checked={props.showIncomplete} name="showIncomplete" value={props.showIncomplete} onChange={props.toggleTodos} />
            </label>
        </div>
    );
}

export default ToggleComplete;