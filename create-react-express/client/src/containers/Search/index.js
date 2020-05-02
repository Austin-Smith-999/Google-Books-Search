import React, {Component} from 'react';
import API from '../../utils/API';
import SearchForm from '../../components/SearchForm';


class Search extends Component{
    state = {
        books: ["booksTesting"],
        search: "searchTesting",
        results: [],
    }

    componentDidMount() {

    }
    
    searchBooks=query => {}

    handleInputChange=event => {}

    handleFormSubmit=event => {}

    render(){
        return (
            <div>
                <h1>Search for book.</h1>
                <SearchForm />
            </div>
        )
    };
}

export default Search;