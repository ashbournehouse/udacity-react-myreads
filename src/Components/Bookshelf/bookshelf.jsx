import React from 'react';

import './bookshelf.css'
import ShelfChanger from '../ShelfChanger/shelfchanger.jsx'

class Bookshelf extends React.Component {
  /****************************************************
  /* This component controls the display of a single
  /* named bookshelf.
  ****************************************************/

  constructor(props) {
    console.log('>>>>>>>> Entering bookshelf constructor >>')
    super(props);
    console.log('>>>>>>>> Leaving bookshelf constructor >>')
  }

  render() {
    console.log('>>>>>>>> Entering bookshelf render >>')
    const {shelfId, dataForBookshelf, dataForBrowse, changeAllocation} = this.props;
    const thisBookshelfData = dataForBookshelf(shelfId)
    return (
      (thisBookshelfData.books.length > 0) ? (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{thisBookshelfData.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {thisBookshelfData.books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{backgroundImage: `url('${book.imageURL}')`}}></div>
                      <ShelfChanger thisBookId={book.id}
                                    thisShelfId={shelfId}
                                    dataForBrowse={dataForBrowse}
                                    changeAllocation={changeAllocation}
                      />
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
    console.log('>>>>>>>> Leaving bookshelf render >>')
  }
}

export default Bookshelf;
