import React, {Component} from 'react';
import { connect } from 'react-redux'
const mapStateToProps = state => {
    return { articles: state.articles }
}

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                {
                    this.props.articles.map(   
                         article =>  (
                            <li key={article.id}>{article.title}</li>
                        )
                    )
                }
            </ul>
         );
    }
}
 
const List = connect(mapStateToProps)(ConnectedList);

export default List