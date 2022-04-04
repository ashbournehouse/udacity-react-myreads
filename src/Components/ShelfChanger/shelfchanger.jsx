import React from 'react';

import './shelfchanger.css'

function ShelfChanger(props) {

  const {shelves} = props;
  const shelfValues = shelves.map(shelf => (shelf.toLowerCase()));
  console.log('----------------------------------')
  console.log('Shelf options are:')
  shelves.map(shelf => {
    console.log(` - ${shelf}`)
  })
  console.log('Shelf values are:')
  shelfValues.map(shelfValue => {
    console.log(` - ${shelfValue}`)
  })
  console.log('----------------------------------')

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        {shelves.map(shelf =>
          <option value={shelf.toLowerCase()}>{shelf}</option>
        )}
     </select>
    </div>
  )
}

export default ShelfChanger;

/**************************************
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        shelves.map(shelf =>
        <option value={shelf.id}>{shelf.name}</option>
      </select>
    </div>

    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>



**************************************/
