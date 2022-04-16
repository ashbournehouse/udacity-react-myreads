import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Bookshelf from '../Bookshelf/bookshelf.jsx'

class Browse extends React.Component {
  /****************************************************
  /* This component controls the display of all
  /* the book shelves.
  ****************************************************/

  constructor(props) {
    console.log('>>>>>>>> Entering Browse constructor >>')
    super(props);
    console.log('>>>>>>>> Leaving Browse constructor >>')
  }

  render() {
    console.log('>>>>>> Entering Browse render >>>>>>>>')
    const {dataForBrowse, dataForBookshelf, changeAllocation} = this.props;
    const shelvesArray = dataForBrowse()
  	return (
      <div className="browse">
        {shelvesArray.map(bookshelf => (
          <div key={bookshelf.shelfId}>
            <Bookshelf  shelfId={bookshelf.shelfId}
                        dataForBrowse={dataForBrowse}
                        dataForBookshelf ={dataForBookshelf}
                        changeAllocation={changeAllocation}
            />
          </div>
        ))}
      </div>
  	)
    console.log('>>>>>> Leaving Browse render >>>>>>>>')
  }
}

export default Browse;
