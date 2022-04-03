import React from 'react';

function ShelfChanger(props) {

  const {shelves} = props;
  console.log(`Shelf names are: ${shelfname}`)
  console.log('----------------------------------')
  shelves.map(shelf => {
    console.log(`${shelf.name}`)
  })

  return (
  <div className="book-shelf-changer">
    <select>
      <option value="move" disabled>Move to...</option>
      shelves.map(shelf =>
      <option value={shelf.id}>{shelf.name}</option>
    </select>
  </div>
  )
}

export default ShelfChanger;