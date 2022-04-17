import React from 'react';

import * as BooksAPI from '../../BooksAPI.js'

import './search.css'

class Search extends React.Component {

	async fetchBooks()  {
		console.log(`>>> entering fetchBooks`);
		const returnedBooks = BooksAPI.getAll();
		console.log(`>>> leaving fetchBooks`);
		return returnedBooks;
	};

	myBooks() {
		BooksAPI.getAll().then (
			returnedBooks => {
				returnedBooks.map(book => {
					console.log(`${book.id}: ${book.title}`)
				})
			},
		)
	};

	myBooks2() {
		BooksAPI.search('Lahiri', 1).then (
			returnedBooks => {
				returnedBooks.map(book => {
					console.log(`${book.id}: ${book.title}`)
				})
			},
		)
	};

	handleSubmit = (event) => {
    event.preventDefault();
		console.log(`>>> entering handleSubmit`);
		var something = {};
		something = this.myBooks2();
		console.log(`>>> leaving handleSubmit`);
	};

	render() {

		return (
      <div className="search">
	      <div className="search-books-bar">
	        <a className="close-search">Close</a>
	        <div className="search-books-input-wrapper">
	          {/*
	            NOTES: The search from BooksAPI is limited to a particular set of search terms.
	            You can find these search terms here:
	            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	            you don't find a specific author or title. Every search is limited by search terms.
	          */}
	          <input type="text" placeholder="Search by title or author"/>
	        </div>
	      </div>
	      <div className='test-form-div'>
        	<form	className="test-form" onSubmit={this.handleSubmit}>
          	<div className="test-button-div">
            	<button className="btn test-button">
                 GET BOOKS
            	</button>
          	</div>
        	</form>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid">

	        </ol>
	      </div>
 	    </div>
		)
	}
}

export default Search;
