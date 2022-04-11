import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'

function Browse(props) {
  /****************************************************
  /* This component controls the display of a all
  /* the book shelves.
  /*
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
  /*
  /* TO DO:
  /*  - maybe ... turn this into a class where
  /*    the constructor method fetches the all the
  /*    required data.
  ****************************************************/

  const {sortedShelvesWithBookAllocations,
          dataForBookshelf,
          dataForShelfChanger,
          changeAllocation
        } = props;

	return (
    <div className="browse">
        {/*
        */}
     {sortedShelvesWithBookAllocations.map(bookshelf => (
        <div key={bookshelf.name}>
          <Bookshelf  shelfId={bookshelf.id}
                      dataForBookshelf ={dataForBookshelf}
                      dataForShelfChanger={dataForShelfChanger}
                      changeAllocation={changeAllocation}
          />
        </div>
      ))}
    </div>
	)
}

export default Browse;
