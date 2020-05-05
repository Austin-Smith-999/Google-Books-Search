import React, {Component} from 'react';
import API from '../../utils/API';
import Card from '../Card';

class BookList extends Component {
    state = {};

    clickSearch(index) {
        console.log("index worked", index);
        console.log(this.props.books);
        var path = this.props.books[index].volumeInfo;
        API.saveBook({
            title:path.title,
            author:path.authors,
            description:path.description,
            image:path.imageLinks.thumbnail,
            infoLink:path.infoLink
        })
        .then(res => console.log("book saved", res)) 
    }
    
    render(){
        return (
            <div className="book">
                {this.props.books.map((items, index) => 
                <Card key={index} title={items.volumeInfo.title} author={items.volumeInfo.author}
                image={items.volumeInfo.imageLinks.thumbnail} description={items.volumeInfo.description}  
                onClick={() => this.clickSearch(index)}
                />
                )}
            </div>
        )
    }
}

export default BookList;