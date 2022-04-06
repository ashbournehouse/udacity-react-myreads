import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'

function Browse(props) {
  const {sortedShelvesWithBookAllocations} = props;

	return (
    <div className="browse">
        {/*
         /* sortedShelvesWithBookAllocations is a JS object
         /* of data prepared from persistent data sources
         /* in the componentDidMount action of App.js
         /*
         /* Its structure (with types) is as follows:
         /*   id: integer,
         /*   sortOrder: integer,
         /*   name: string,                /* this is the name of the bookshelf
         /*   bookIds: array of ints ,     /* the IDs of the books allocated to the shelf
         /*   books: array of books objects,
         /*
         /* Each books object has structure:
         /*   id: integer,
         /*   title: string,
         /*   author: string,
         /*   imageURL: string,
         /*
         /* Images are retrieved from books.google.com so there will be
         /* no image displayed without a working Internet connection.
        */}
     {sortedShelvesWithBookAllocations.map(bookshelf => (
        <div key={bookshelf.name}>
          <Bookshelf shelfName={bookshelf.name} books={bookshelf.books} />
        </div>
      ))}
    </div>
	)
}

export default Browse;
