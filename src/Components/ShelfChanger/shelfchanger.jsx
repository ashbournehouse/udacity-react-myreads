import React from 'react';

import './shelfchanger.css'


class ShelfChanger extends React.Component {

  /****************************************************
  /* This component is responsible for displaying and
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

  handleSelect = (event) => {
    console.log('>>>>>>>>>> Entering ShelfChanger handleSelect')
    const {thisBookId, changeAllocation} = this.props;
    changeAllocation(thisBookId, Number(event.target.value));
    console.log('>>>>>>>>>> Leaving ShelfChanger handleSelect')
  }

  render() {
    console.log('>>>>>>>>>> Entering ShelfChanger render')
    const {thisBookId, thisShelfId, dataForBrowse} = this.props
    const shelvesArray = dataForBrowse();
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect} defaultValue={thisShelfId}>
          <option value="move" disabled>Move to...</option>
          {shelvesArray.map(shelf =>
            <option key={shelf.shelfId} value={shelf.shelfId} >
              {shelf.shelfName}
            </option>
          )}
        </select>
      </div>
    )
    console.log('>>>>>>>>>> Leaving ShelfChanger render')
  }
}

export default ShelfChanger;
