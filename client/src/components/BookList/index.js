import React, {Component} from 'react';
import API from '../../utils/API';
import Card from '../Card';

class BookList extends Component {
    state = {

    };

    clickSearch(index) {
        console.log("index worked", index);
        console.log(this.props.books);
        var path = this.props.books[index].volumeInfo;
        API.saveBooks({
            title:path.title,
            author:path.authors,
            description:path.description,
            image:path.imageLinks.thumbnail,
            infoLink:path.infoLink
        })
        .then(res => console.log("book saved", res))
        .then(alert("This book is saved"));
    }
    
    render(){
        return (
            <div className="book-something">
                {this.props.books.map((item, index) => 
                <Card key={index} title={item.volumeInfo.title} author={item.volumeInfo.author}
                image={item.volumeInfo.imageLinks.thumbnail} description={item.volumeInfo.description}  
                onClick={() => this.clickSearch(index)}
                />
                )}
            </div>
        )
    }
}

export default BookList;