import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCompleted } from '../actions'
import { completeTodoRef } from '../firebase'

class CompleteTodoList extends Component{

componentDidMount(){
    completeTodoRef.on("value", snap => {
        let completeTodos = [];
        snap.forEach(completeTodo => {
            const { email , title } = completeTodo.val();
            completeTodos.push({email , title})
        })
          console.log('completeTodos',completeTodos)
          this.props.setCompleted(completeTodos);
        })
}

    clearCompleted(){
        completeTodoRef.set([])
    }
  
    render(){
   
       console.log("this.props.completedTodos",this.props.completeTodos)
        return(
            <div>
                 {this.props.completeTodos.map((completeTodo,index) => {
                     const { email , title } =completeTodo;
                     return (
                         <div key={index}>
                          <strong>{title}</strong> completed by <em>{email}</em>
                         </div>
                     )
                 } )}

                 <button className="btn btn-primary" onClick={()=> this.clearCompleted()} >Clear All</button>
             </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeTodos } = state;
    return{
        completeTodos
    }
}

export default connect(mapStateToProps,{ setCompleted })(CompleteTodoList)