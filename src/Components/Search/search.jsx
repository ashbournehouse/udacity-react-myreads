import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './search.css'

class Search extends React.Component {

/*
  constructor(props) {
    super(props);
  };
*/

  componentDidMount() {
    console.log("Entering Search - componentDidMount");
    //console.log(JSON.stringify(this.onNavigate()));
    console.log("Leaving Search - componentDidMount");
    return true
  }

	render () {
			// Attempt to destructure the props ...
		//const {onNavigate} = this.props;

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
	      <div className="search-books-results">
	        <ol className="books-grid"></ol>
	      </div>
 	    </div>
		)
	}
}

export default Search;