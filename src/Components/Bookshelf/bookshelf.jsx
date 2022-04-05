import React from 'react';

import './bookshelf.css'
import ShelfChanger from '../ShelfChanger/shelfchanger.jsx'

function Bookshelf(props) {

  const {shelfname, books} = props;
  /**************************************************
  console.log(`Shelf name is: ${shelfname}`)
  console.log('------------------------------------')
  books.map(book => {
    console.log(`Book title is: ${book.title}`)
    console.log(`Book author is: ${book.author}`)
    console.log(`Book imageURL is: ${book.imageURL}`)
    console.log('----------------------------------')
  })
  **************************************************/
  return (
    (books.length > 0) ? (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfname}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url('${book.imageURL}')`}}></div>
                    <ShelfChanger shelves={["Currently Reading","Want to Read", "Read", "None"]} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    ) : (
      <div className="bookshelf"></div>
    )
  )
}

export default Bookshelf;
