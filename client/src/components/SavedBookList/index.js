import React, {Component} from 'react';
import Card from '../Card';
import './style.css';

class SavedBookList extends Component{
    state={};

    render() {
        return(
            <div>
    
            <h1>Reading List</h1>
    
            <div  className="book-something" >
            {this.props.books.map((item, index) => 
            <Card key={index} title={item.title} author={item.authors} link={item.link} image={item.img} summary={item.description} />)}
            </div>
           
    
          </div>
            )
        }
}







export default SavedBookList;