import React from 'react';

class TodoItem extends React.Component {
    render() {
        const {completed, id , title} = this.props.todo;
        return (
            <li className="todo-item">
                <input
                    checked={completed} type={"checkbox"}
                    onChange={() => this.props.handleCheckboxChange(id)}/>
                <span className={completed ? "completed" : null}>{title}</span>
                <button className="btn-style" onClick={()=>this.props.handleDelete(id)} >  X </button>
            </li>
        );
    }
}

export default TodoItem;