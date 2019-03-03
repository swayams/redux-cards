import React, { Component} from 'react';
import { connect } from 'react-redux'
import uuidv1 from 'uuid'

import { addArticle } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = { title: '' }
    }

    textRef = React.createRef()

    handleChange = () => {
        let value = this.textRef.current.value
        let obj = {[this.textRef.current.id]: value}
        this.setState(obj)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {title } = this.state
        const id = uuidv1()
        this.props.addArticle({id, title})
        this.setState({title: ""})
    }
    render() { 
        return (  <div>
                <form onSubmit={this.handleSubmit}>
                <label > Title </label> <br></br><br>
                </br>

                <input type="text" id="title" ref={this.textRef} className="form" value= { this.state.title} onChange={this.handleChange}></input>
                </form>
            </div>);
    }
}
 
 const Form = connect(null, mapDispatchToProps) (ConnectedForm)

 export default Form