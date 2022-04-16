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
    screen: 'search',
  }

  constructor(props) {
    super(props)
    console.log('>> Entering APP constructor >>>>>>>>')
    console.log('>> Leaving APP constructor >>>>>>>>')
  }

  dataForBrowse = () => {
    console.log('>> Entering dataForBrowse >>>>>>>>')
    var shelvesArray = [];
      // TO DO: sort by sort order before mapping
    this.state.bookshelves.map(shelf => {
      shelvesArray.push(
        {shelfId: shelf.id,
          shelfName: shelf.name,
        }
      )
    })
    console.log('>> Leaving dataForBrowse >>>>>>>>')
    return shelvesArray;
  }

  dataForBookshelf = (shelfId) => {
    console.log('>> Entering APP dataForBookshelf >>>>>>>>')
      // Should reurn an object a bit
      // like this
      //  {shelfName: string,
      //   books: [{
      //     bookId: integer,
      //     bookTitle: string,
      //     bookAuthor: string,
      //     bookCoverURL: string
      //    }]}
    var bookshelfData = {
      shelfName: "",
      books: [],
      updateCount: this.state.updateCount,
    }
    this.state.bookshelves.map(shelf => {
      if (shelf.id === shelfId) {
        bookshelfData.shelfName = shelf.name;
      }
    })
    this.state.allocations.map(allocation => {
      if (allocation.shelfId === shelfId) {
        //console.log('----- shelfId MATCH, books are:');
        allocation.bookIds.map(bookId => {
          this.state.booksList.map(book => {
            if (book.id === bookId) {
              bookshelfData.books.push(book)
              //console.log(`Book title is: ${book.title}`)
            }
          })
        })
      }
    })
    //console.log(JSON.stringify(bookshelfData))
    console.log('>> Leaving APP dataForBookshelf >>>>>>>>')
    return bookshelfData;
  }


  changeAllocation = (bookId, toShelfId, myCallback) => {
      //
      // TO DO:
      //   - Check if toShelf actualy exists!!
      //   - Have a big tidy up of all the logging!!!
      //
    console.log(">> Entering changeAllocation >>>>>>>>>>>>>>>>>>>>>>>>");
    //console.log(`Book ID is: ${bookId}`);
    //console.log(`  - type of bookId is: ${typeof bookId}`);
    //console.log(`Shelf to move to is: ${toShelfId}`);
    //console.log(`  - type of toShelfId is: ${typeof toShelfId}`);
    var newAllocations = this.state.allocations.slice(0);
    //console.log(`New allocations: `);
    //console.log(JSON.stringify(newAllocations));
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
    this.setState({allocations: newAllocations})
    console.log("Checking new state: ");
    this.state.allocations.map(allocation => {
      console.log(`Shelf: ${allocation.shelfId}  Books: ${allocation.bookIds} `);
    });
    //this.dataForBookshelf(toShelfId);
    console.log(">> Leaving changeAllocation >>>>>>>>>>>>>>>>>>>>>>>>");
  }

  render() {
     //
    console.log(">> Entering APP render >>>>>>>>>");
    return (
      <div className="app">
        <Banner main="MyReads"
                sub="A project for the Udacity React Developer Course"
                debugtext={JSON.stringify(this.state.allocations)}
        />
        <Content dataForBookshelf = {this.dataForBookshelf}
                 dataForBrowse = {this.dataForBrowse}
                 changeAllocation = {this.changeAllocation}
        />
        <Footer />
      </div>
    )
    console.log(">> Leaving APP render >>>>>>>>>");
  }
}

export default App
