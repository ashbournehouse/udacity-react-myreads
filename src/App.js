import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
  // Temporarly break out css into probable components
import './Components/Main/main.css'
import './Components/Search/search.css'
import './Components/BooksGrid/booksgrid.css'

import Banner from './Components/Banner/banner.jsx'
import Bookshelf from './Components/Bookshelf/bookshelf.jsx'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    booksList: [
      {id: 1, title: "To Kill a Mockingbird" , author: "Harper Lee",
        imageURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      },
      {id: 2, title: "Ender's Game", author: "Orson Scott Card",
        imageURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      },
      {id: 3, title: "1776", author: "David McCullough",
        imageURL: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      },
      {id: 4, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling",
        imageURL: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      },
      {id: 5, title: "The Hobbit", author: "J.R.R. Tolkien",
        imageURL: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" ,
      },
      {id: 6, title: "Oh, the Places You'll Go!", author: "Seuss",
        imageURL: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
      },
      {id: 7, title: "The Adventures of Tom Sawyer", author: "Mark Twain",
        imageURL: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
      },
    ],
    bookshelves: [
      {id: 1, sortOrder: "1", name: "Currently Reading"},
      {id: 2, sortOrder: "2", name: "Want to Read"},
      {id: 3, sortOrder: "3", name: "Read"},
      {id: 4, sortOrder: "4", name: "Not Interested"},
    ],
    allocations: [
      {shelfId: 1, bookIds: [1, 2]},
      {shelfId: 2, bookIds: [3, 4]},
      {shelfId: 3, bookIds: [5, 6, 7]},
      {shelfId: 4, bookIds: []},
    ],
    sortedShelvesWithBookAllocations: []
  }
  componentDidMount() {
    console.log("Entering componentDidMount")
      //
      // The following logic produces an array of shelf names sorted by sortOrder value
      //   then maps an array of shelf names from this.
      //
    const sortedShelves = this.state.bookshelves.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1)
    console.log("**********************************************")
    console.log(JSON.stringify(sortedShelves))
    console.log("----------------------------------------------")
      // Go thru the sorted shelves and find their books allocations
    sortedShelves.map(sortedShelf => {
      this.state.allocations.map(allocation => {
        if (allocation.shelfId === sortedShelf.id) {
            // Add a bookIds field to each sortedShelf
          sortedShelf.bookIds = allocation.bookIds.slice(0);
            // Add a books objects array to each sortedShelf
          sortedShelf.books = [];
            // Go thru' the booksList and add the relevant book objects
          sortedShelf.bookIds.map(bookId => {
            this.state.booksList.map(book => {
              if (book.id === bookId) {
                sortedShelf.books.push(book)
              }
            })
          })
        }
      })
    })
    console.log(JSON.stringify(sortedShelves))
    console.log("**********************************************")
    this.setState({
      sortedShelvesWithBookAllocations: sortedShelves
    })
    console.log("Leaving componentDidMount")
  }

  render() {
      //
      // The following logic produces an array of shelf names sorted by sortOrder value
      //   then maps an array of shefl names from this.
      //
    //const sortedShelves = this.state.bookshelves.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1)
     //
    return (
      <div className="app">
        <Banner main="MyReads" sub="A project for the Udacity React Developer Course" />
        {this.state.showSearchPage ? (
          <div className="content search-books ">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
        ) : (
          <div className="content list-books">
            <div className="list-books-content">
              <div className="bookshelves">
                {this.state.sortedShelvesWithBookAllocations.map((sortedShelf) => (
                  <Bookshelf
                    shelfname={sortedShelf.name}
                    books={sortedShelf.books}
                    bookshelves={this.state.bookshelves}
                  />
                ))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
