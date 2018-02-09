import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoRef } from '../firebase'
import { setTodos } from '../actions'
import TodoItem from './TodoItem'

class TodoList extends Component {

    componentDidMount() {
        todoRef.on('value', snap => {
            let todos = [];
            snap.forEach(todo => {
                const { email, title } = todo.val()
                let todoObject = todo.val();
                console.log('todoObject', todoObject)
                const serverKey=todo.key
                todos.push({ email, title , serverKey });
                console.log("todo",todo) //through which we can detemine the uid
            })
            console.log("todos", todos);
            this.props.setTodos(todos)
        })
    }


    render() {
        console.log("this.props.todos", this.props.todos)

        return (

            <div>{this.props.todos.map((todo, index) => {
                return (
                    <TodoItem key={index} todo={todo} />

                )
            })}</div>

        )
    }
}


function mapStateToProps(state) {
    const { todos } = state;
    return {
        todos
    }
}

export default connect(mapStateToProps, { setTodos })(TodoList);