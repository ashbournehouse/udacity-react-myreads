import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'
//import './booksgrid.css'

function Browse(props) {
  const {sortedShelvesWithBookAllocations} = props;

	return (
    <div className="browse">
     {sortedShelvesWithBookAllocations.map(bookshelf => (
        <div key={bookshelf.name}>
          <Bookshelf shelfname={bookshelf.name} books={bookshelf.books} />
        </div>
      ))}
    </div>
	)
}

export default Browse;
