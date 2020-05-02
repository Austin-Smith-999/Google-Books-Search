import React from 'react';

function SearchForm(props) {
    return(
        <div className="searchContainer">
            <h2>Book Search</h2>
            <form className="bookSearch">
                <label form="bookSearch">Enter a book to search.</label><br/>
                <input type="text" form="bookSearch" required placeholder="bookTitle"/>
                
            </form>
        </div>
    )
}