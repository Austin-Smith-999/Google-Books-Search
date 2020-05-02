import React, {Component} from 'react';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';


class Search extends Component{
    state = {
        books: [],
        search: "",
        results: [],
    }

    componentDidMount() {

    }
    
    searchBooks=query => {
        console.log("query worked!",query);
        API.search(query)
        .then(res => {
            console.log(".then worked!");
            this.setState({books: res.data.items});
            console.log("data worked", this.state);
        })
        .catch(err => console.log(err))
    }

    handleInputChange=event => {
        this.setState({search: event.target.value})
    }

    handleFormSubmit=event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    }

    render(){
        return (
            <div>
                <h1>Search for book.</h1>
                <SearchForm 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
            </div>
        )
    };
}

export default Search;