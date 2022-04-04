import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'
//import './booksgrid.css'

class BooksGrid extends React.Component {

/*
  constructor(props) {
    super(props);
  };
*/

  componentDidMount() {
    console.log("Entering Booksgrid - componentDidMount");
    //console.log(JSON.stringify(this.onNavigate()));
    console.log("Leaving Booksgrid - componentDidMount");
    return true
  }

	render () {

		return (
      <div className="content list-books">
        <div className="list-books-content">
        	<h2>This is where the booksgrid will go.</h2>
        	{/*}
          <div className="bookshelves">
            {this.state.sortedShelvesWithBookAllocations.map((sortedShelf) => (
              <Bookshelf
                shelfname={sortedShelf.name}
                books={sortedShelf.books}
                bookshelves={this.state.bookshelves}
              />
            ))}
          </div>
        */}
        </div>
        <div>
          <Link to='/search'>Search</Link>
          <Link to='/'>Root</Link>
       </div>
      </div>
 		)
	}
}

export default BooksGrid;
