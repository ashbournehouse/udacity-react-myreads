import React from 'react';

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
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfname}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageURL}')`}}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf;