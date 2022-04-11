import React from 'react'

// import * as BooksAPI from './BooksAPI'

import './App.css'
import './Components/Main/main.css'

import Banner from './Components/Banner/banner.jsx'
import Content from './Components/Content/content.jsx'
import Footer from './Components/Footer/footer.jsx'

class App extends React.Component {
    // TO DO:
    //   Move this data to a JSON file so that it persists
    //   when the page is refreshed!!!
    //
    //  Refresh using a constructor, save on change!
    //
  state = {
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
        imageURL: "https://books.google.co.uk/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73VkQcJ2bOyIgAqK30F1kcDTf3v2ty6EB07H_qPUPOjEJWvF2insKi4-rKmI5Tv-k3ilZuUz4bng_j1hY5r97ehF3X18xoiGbtIoO6_1vXHeEobA8ZavsCEF0UQzhQOK27_BWn8" ,
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
    sortedShelvesWithBookAllocations: [],
    screen: 'search',
  }

  constructor(props) {
    super(props)
    console.log('>>> Entering APP constructor >>>>>>>>')

    this.buildDataSet()
    console.log('>>> Leaving APP constructor >>>>>>>>')
  }

  buildDataSet() {
    console.log("Entering buildDataSet")
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
    this.state.sortedShelvesWithBookAllocations = sortedShelves
    console.log("Leaving buildDataSet")
  }

  dataForBookshelf = (shelfId) => {
      // Should reurn an object a bit
      // like this
      //  {shelfName: string,
      //   books: [{
      //     bookId: integer,
      //     bookTitle: string,
      //     bookAuthor: string,
      //     bookCoverURL: string
      //    }]}
    console.log('>>> Entering dataForBookshelf >>>>>>>>')
    var bookshelfData = {
      shelfName: "",
      books: [],
    }
    this.state.bookshelves.map(shelf => {
      if (shelf.id === shelfId) {
        bookshelfData.shelfName = shelf.name;
      }
    })
    this.state.allocations.map(allocation => {
      if (allocation.shelfId === shelfId) {
        console.log('----- shelfId MATCH, books are:');
        allocation.bookIds.map(bookId => {
          this.state.booksList.map(book => {
            if (book.id === bookId) {
              bookshelfData.books.push(book)
              console.log(`Book title is: ${book.title}`)
            }
          })
        })
      }
    })
    console.log(JSON.stringify(bookshelfData))
    console.log('>>> Leaving dataForBookshelf >>>>>>>>')
    return bookshelfData;
  }

  dataForShelfChanger = () => {
      // Should return an object a bit
      // like this
      //  {bookID: integer,
      //    shelfChoices: [{
      //      shelfId: integer,
      //      shelfName: string,
      //  }]}
    console.log('>>> Entering dataForShelfChanger >>>>>>>>')
    var shelfChangerData = {shelfChoices: []};
    console.log(JSON.stringify(shelfChangerData))
    this.state.bookshelves.map(shelf => {
      shelfChangerData.shelfChoices.push(
        {shelfId: shelf.id,
          shelfName: shelf.name,
        }
      )
    })
    console.log(' - about to leave dataForShelfChanger')
    console.log(JSON.stringify(shelfChangerData));
    console.log('>>> Leaving dataForShelfChanger >>>>>>>>')
    return shelfChangerData;
  }

  changeAllocation = (bookId, toShelfId) => {
      //
      // TO DO:
      //   - Check if toShelf actualy exists!!
      //   - Have a big tidy up of all the logging!!!
      //
    console.log(">>> Entering changeAllocation >>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(`Book ID is: ${bookId}`);
    console.log(`  - type of bookId is: ${typeof bookId}`);
    console.log(`Shelf to move to is: ${toShelfId}`);
    console.log(`  - type of toShelfId is: ${typeof toShelfId}`);
    var newAllocations = this.state.allocations.slice(0);
    console.log(`New allocations: `);
    console.log(JSON.stringify(newAllocations));
      // Remove book from current shelf
    newAllocations.map(allocation => {
      if (allocation.bookIds.includes(bookId)) {
        const index = allocation.bookIds.indexOf(bookId);
        if (index > -1){
          allocation.bookIds.splice(index, 1);
        }
      }
    })
      // Add book to new shelf
    newAllocations.map(allocation => {
      if (allocation.shelfId === toShelfId) {
        allocation.bookIds.push(bookId)
      }
    })
    this.setState({allocations: newAllocations}, () => {
      console.log(JSON.stringify(this.state.allocations));
      this.buildDataSet();
    });
    console.log("Checking new state: ");
    this.state.allocations.map(allocation => {
      console.log(`Shelf: ${allocation.shelfId}  Books: ${allocation.bookIds} `);
    });
    this.dataForBookshelf(toShelfId);
    console.log(">>> Leaving changeAllocation >>>>>>>>>>>>>>>>>>>>>>>>");
  }


  render() {
      //
      // The following logic produces an array of shelf names sorted by sortOrder value
      //   then maps an array of shelf names from this.
      //
    //const sortedShelves = this.state.bookshelves.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1)
     //
    return (
      <div className="app">
        <Banner main="MyReads"
                sub="A project for the Udacity React Developer Course"
                debugtext={JSON.stringify(this.state.allocations)}
        />
        <div>
          {JSON.stringify(this.state.allocations)}
        </div>
        <Content sortedShelvesWithBookAllocations={
                  this.state.sortedShelvesWithBookAllocations}
                  dataForBookshelf ={this.dataForBookshelf}
                  dataForShelfChanger ={this.dataForShelfChanger}
                  changeAllocation = {this.changeAllocation}
        />
        <Footer />
      </div>
    )
  }
}

export default App


