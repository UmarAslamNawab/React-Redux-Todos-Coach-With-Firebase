import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTodoRef, todoRef } from '../firebase'

class TodoItem extends Component {

completeTodo(){
    const { email } = this.props.user;
    const { title , serverKey } = this.props.todo;
    console.log('email',email, "title",title)
    console.log("serverKey",serverKey);
    todoRef.child(serverKey).remove()
    completeTodoRef.push({email,title})
}

    render() {
        console.log("this.props.todo", this.props.todo);
        const { title , email } = this.props.todo
        return (
            <div style={{ margin: "5px" }}>
                <strong>{title}</strong>
                <span style={{marginRight:"5px"}}>Submitted By : <em>{email}</em></span>
                <button className="btn btn-sm btn-primary" onClick={()=> this.completeTodo()}>Complete</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { user } = state;
    return{
        user
    }
}

export default connect(mapStateToProps,null)(TodoItem)