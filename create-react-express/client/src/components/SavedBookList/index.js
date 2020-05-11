import React, {Component} from 'react';
import Card from '../Card';
import './style.css';

class SavedBookList extends Component{
    state={};

    render() {
        return(
            <div>
                <h1>reading list</h1>
                <div className="bookClass">
                {this.props.books.map((items, index) => 
                <Card key={index} title={items.volumeInfo.title} author={items.volumeInfo.author}
                image={items.volumeInfo.imageLinks.thumbnail} description={items.volumeInfo.description}  
                onClick={() => this.clickSearch(index)}
                />
                )}    
                </div>
            </div>
        )
    }
}







export default SavedBookList;