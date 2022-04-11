import React from 'react';

import './bookshelf.css'
import ShelfChanger from '../ShelfChanger/shelfchanger.jsx'

class Bookshelf extends React.Component {
  /****************************************************
  /* This component controls the display of a single
  /* named bookshelf.
  /*
  /* DATA CONSIDERATIONS:
  /*  - Returns: no data; this is just display
  /*  - Requires: Shelf name and an array of book
  /*    objects
  /*
  /* TO DO:
  /*  - maybe ... turn this into a class where
  /*    the constructor method fetches the array
  /*    of books. In which case the shelf ID would
  /*    be a better 'prop' than the shelf name.
  ****************************************************/

    /**************************************************
  console.log(`Shelf name is: ${shelfName}`)
  console.log('------------------------------------')
  books.map(book => {
    console.log(`Book title is: ${book.title}`)
    console.log(`Book author is: ${book.author}`)
    console.log(`Book imageURL is: ${book.imageURL}`)
    console.log('----------------------------------')
  })
    **************************************************/
  state = {
    shelfId: 0,
    shelfName: "",
    books: [],
  }

  constructor(props) {
    super(props);
    console.log(">>> Entering bookshelf constructor >>>>>>>>>>>>>>>>>")
    console.log(" - (props) contains:")
    console.log(JSON.stringify(props))
    const {shelfId,
            dataForBookshelf,
            dataForShelfChanger,
            changeAllocation
          } = props;
    this.state.shelfId = shelfId;
    const bookshelfData = dataForBookshelf(shelfId);
    this.state.shelfName = bookshelfData.shelfName;
    this.state.books = bookshelfData.books.slice(0);
    this.setState({
      shelfId: shelfId,
      shelfName: bookshelfData.shelfName,
      books: bookshelfData.books.slice(0),
    })
    //console.log(" - Now, local state contains:")
    console.log(JSON.stringify(this.state))
    console.log(">>> Leaving bookshelf constructor >>>>>>>>>>>>>>>>>")
  }

  render() {
    return (
      (this.state.books.length > 0) ? (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.state.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{backgroundImage: `url('${book.imageURL}')`}}></div>
                      <ShelfChanger thisBookId={book.id}
                                    thisShelfId={this.state.shelfId}
                                    dataForShelfChanger={this.props.dataForShelfChanger}
                                    changeAllocation={this.props.changeAllocation}
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
  }
}

export default Bookshelf;
