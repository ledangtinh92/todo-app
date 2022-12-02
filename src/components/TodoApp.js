import React from 'react';
import HeaderCustom from './HeaderCustom'
import Todos from './Todos'
import AddTodo from "./AddTodo";
import axios from 'axios';
import Footer from '../store/containers/Footer';

class TodoApp extends React.Component{
    state = {
        todos: []
    };

    componentDidMount(){
        const config= {
            params: {_limit:10}
        }
        // get data from servers
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then( response =>
                this.setState({todos: response.data})
            );
    }

    handleCheckboxChange = (id) => {
        this.setState({
            todos: this.state.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    };

    handleDelete = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })]
        });
    }

    handleAddTodo = (title) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            title :title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="container">
                <HeaderCustom></HeaderCustom>
                <AddTodo handleAddTodo = {this.handleAddTodo}></AddTodo>
                    <Todos listData={this.state.todos}
                           handleCheckboxChange={this.handleCheckboxChange }
                           handleDelete = {this.handleDelete}
                    />
                <Footer></Footer>
            </div>
        );
    }
}
export default TodoApp;