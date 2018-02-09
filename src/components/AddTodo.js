import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoRef } from '../firebase'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    addTodo() {
        console.log("this", this);
        const { title } = this.state;
        const { email } = this.props.user; //worst thing mostest
        
        console.log(email)

        todoRef.push({email,title})

        // console.log("this.state",this.state)
    }
    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" placeholder="Add Todo" className="form-control" style={{ marginRight: '5px' }} onChange={event => this.setState({ title: event.target.value })} />
                    <button className="btn btn-success" type="button" onClick={() => this.addTodo()}>Submit</button>

                </div>
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

export default connect(mapStateToProps,null)(AddTodo);