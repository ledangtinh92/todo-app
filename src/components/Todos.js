import React from 'react';
import TodoItem from './TodoItem'
import Lazyload from 'react-lazy-load';

class Todos extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.listData.map((item, index) => (
                            <Lazyload height={40} key={item.id}>
                                <TodoItem key={item.id} todo={item}
                                          handleCheckboxChange={this.props.handleCheckboxChange}
                                          handleDelete={this.props.handleDelete}
                                ></TodoItem>
                            </Lazyload>

                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default Todos;