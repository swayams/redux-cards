import React from 'react';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {count: state.articles.count}
}
class ConnectedCounter extends Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return (  <div style={{color: 'green'}}> {this.props.count}</div>);
    }
}
 
const Counter = connect(mapStateToProps)(ConnectedCounter)
export default Counter ;