import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'
//import './booksgrid.css'

function Booksgrid(props) {
  const {sortedShelvesWithBookAllocations} = props;

	return (
    <div className="booksgrid">
     {sortedShelvesWithBookAllocations.map(bookshelf => (
        <div>
          <Bookshelf shelfname={bookshelf.name} books={bookshelf.books} />
        </div>
      ))}
    </div>
	)
}

export default Booksgrid;
