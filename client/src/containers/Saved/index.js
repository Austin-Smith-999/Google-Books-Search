import React, {Component} from 'react';
import SavedBookList from '../../components/SavedBookList';
import API from '../../utils/API';

class Saved extends Component{
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({savedBooks:res.data}))
    }

    render() {
        return(
            <div>
                <SavedBookList books={this.state.savedBooks}/>
            </div>
        )
    }

}

export default Saved;