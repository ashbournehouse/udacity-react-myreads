import React from 'react';

import './shelfchanger.css'


class ShelfChanger extends React.Component {

  /****************************************************
  /* This componet is responsible ofr displaying and
  /* processing the list box that moves books between
  /* shelves.
  /*
  /* DATA CONSIDERATIONS
  /*  - Returns: Book ID with toShelf ID
  /*  - Requires: Book ID with all shelf names and IDs
  /*
  /* TO DO:
  /*  - Clean implementation of data in and out
  ****************************************************/

  state = {
    bookId: 0,
    selectedShelfId: 0,
    shelves: []
  }


  constructor(props) {
    super(props);
    console.log(">>> Entering shelfchanger constructor >>>>>>>>>>>>>>>>>")
    console.log(" - (props) contains:")
    console.log(JSON.stringify(props))
    const {thisBookId, thisShelfId, dataForShelfChanger, changeAllocation} = this.props;
    //console.log(JSON.stringify(dataForShelfChanger()))
    this.state.bookId = thisBookId;
    this.state.selectedShelfId = thisShelfId;
    this.state.shelves = dataForShelfChanger().shelfChoices.slice(0)
    console.log(" - local state now contains:")
    console.log(JSON.stringify(this.state))
    console.log(">>> Leaving shelfchanger constructor >>>>>>>>>>>>>>>>>")
  }

  handleSelect = (event) => {
    console.log(">>> Entering shelfchanger handleSelect >>>>>>>>>>>>>>>>>")
    const {changeAllocation} = this.props;
    console.log(` - selected value is: ${event.target.value}`);
    this.state.selectedShelfId = Number(event.target.value);
    console.log(' - in handleSelect - updated state is:');
    console.log(JSON.stringify(this.state));
    changeAllocation(this.state.bookId, this.state.selectedShelfId);
    console.log('***********************************');
  }

  render() {
    console.log(">>> Entering shelfchanger render >>>>>>>>>>>>>>>>>")
    console.log(" - local state contains:")
    console.log(JSON.stringify(this.state))
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect}
                defaultValue={this.state.selectedShelfId}
        >
          <option value="move" disabled>Move to...</option>
          {this.state.shelves.map(shelf =>
            //{console.log(`key for this option is: ${shelf.id}`)}
            <option key={shelf.shelfId} value={shelf.shelfId} >
              {shelf.shelfName}
            </option>
          )}
        </select>
      </div>
    )
  }
}

export default ShelfChanger;


/*
          {this.state.shelvesData.map(thisShelf =>
            <option key={thisShelf.shelfValue}
                    value={thisShelf.shelfValue}
            >
              {thisShelf.shelfName}
            </option>
          )}
*/

