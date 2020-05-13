import React, {Component} from 'react';
import Card from '../Card';
import './style.css';

class SavedBookList extends Component{
    state={};

    render() {
        return(
            <div>
                <h1>reading list</h1>
                <div className="book-something">
                {this.props.books.map((item, index) => 
                <Card title={item.title} author={item.authors}
                image={item.img} description={item.description}  
                link={item.link}
                />
                )}    
                </div>
            </div>
        )
    }
}







export default SavedBookList;