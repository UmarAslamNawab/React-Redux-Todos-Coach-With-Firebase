import React, { Component } from 'react'
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import CompleteTodoList from './CompleteTodoList'
class App extends Component {


    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style={{ margin: "5px" }}>
                <h3>Todos Coach</h3>
                <AddTodo />
                <hr />
                <h4>Todos</h4>
                <TodoList />
                <hr />
                <h4>Complete Todos </h4>
                <CompleteTodoList />
                <hr />
                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign Out</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {

    };
}


export default connect(mapStateToProps, null)(App);