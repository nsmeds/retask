import React from 'react';

const ToggleComplete = props => {

    // console.log(props);

    return (
        <div>
            <label>
                <span>View Completed</span>
                <input type="checkbox" checked={props.showComplete} name="showComplete" value={props.showComplete} onChange={props.toggleTodos} />
            </label>
            <label>
                <span>View Incomplete</span>
                <input type="checkbox" checked={props.showIncomplete} name="showIncomplete" value={props.showIncomplete} onChange={props.toggleTodos} />
            </label>
        </div>
    );
}

export default ToggleComplete;