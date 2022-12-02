import React, {useState} from 'react';

function AddTodo (props) {
    const [title,setTitles] = useState("");
    const addTodo = e =>{
        e.preventDefault();
        if (title === "" || title ==""){
            alert("Title is required");
            return false;
        }

        props.handleAddTodo(title);
        setTitles("");
    }

    const onChangeTitles = (e) =>{
        setTitles(e.target.value);
    }

        return (
            <form className="form-container" onSubmit={addTodo}>
                <input type="text" value={title} onChange={onChangeTitles} placeholder="Add Todo..." className="input-text" />
                <input type="submit" value="Submit" className="inputsubmit" />
            </form>
        );
}

export default AddTodo;