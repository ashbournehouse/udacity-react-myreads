import React from 'react';

import './shelfchanger.css'


class ShelfChanger extends React.Component {

  state = {
    shelvesData: [],
  }

  constructor(props) {
    super(props);
      //
      // Update the state from props before rendering
      //
    const {shelfName, shelves} = this.props;
    const tempShelvesData = this.state.shelvesData.slice(0);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(`Shelf name is: ${shelfName}`);
    console.log(`Shelf options are:`);
    shelves.map(shelf => {
      console.log(` - ${shelf}`);
    })
    console.log('-----------------------------------');
    console.log(JSON.stringify(tempShelvesData));
    console.log('-----------------------------------');
    shelves.map(shelf => {
      console.log(`About to add to state for ${shelf}`);
      tempShelvesData.push({
            shelfName: shelf,
            shelfValue: (shelf.toLowerCase().replace(/\s/g,'')),
            shelfSelected: (shelf === shelfName ? true : false),
      });
    console.log('Updated shelvesData is:');
    console.log(JSON.stringify(tempShelvesData));
    });
    this.state.shelvesData = tempShelvesData;
    console.log('Updated state is:');
    console.log(JSON.stringify(this.state));
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  }

/*
  componentWillMount() {
    const {shelfName, shelves} = this.props;
    const tempShelvesData = this.state.shelvesData.slice(0);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(`Shelf name is: ${shelfName}`);
    console.log(`Shelf options are:`);
    shelves.map(shelf => {
      console.log(` - ${shelf}`);
    })
    console.log('-----------------------------------');
    console.log(JSON.stringify(tempShelvesData));
    console.log('-----------------------------------');
    shelves.map(shelf => {
      console.log(`About to add to state for ${shelf}`);
      tempShelvesData.push({
            shelfName: shelf,
            shelfValue: (shelf.toLowerCase().replace(/\s/g,'')),
            shelfSelected: (shelf === shelfName ? true : false),
      });
    console.log('Updated shelvesData is:');
    console.log(JSON.stringify(tempShelvesData));
    });
    this.state.shelvesData = tempShelvesData;
    console.log('Updated state is:');
    console.log(JSON.stringify(this.state));
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  }
*/

  handleSelect() {
    console.log(`Selected value is: ${event.target.value}`)
  }

  render() {

    //const {shelves} = this.props;
    //const shelfValues = shelves.map(shelf => (shelf.toLowerCase().replace(/\s/g,'')))
    console.log('----------------------------------')
    console.log('In render, shelf options are:')
    this.state.shelvesData.map(shelf => {
      console.log(JSON.stringify(shelf));
      console.log(` - ${shelf.shelfName}`);
      console.log(` - ${shelf.shelfValue}`);
      console.log(` - ${shelf.shelfSelected}`);
      console.log('-------------------------');
   })
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelect}>
          <option value="move" disabled>Move to...</option>
          {this.state.shelvesData.map(thisShelf =>
            <option key={thisShelf.shelfValue}
                    value={thisShelf.shelfValue}
                    selected = {thisShelf.shelfSelected ? true : false}
            >
              {thisShelf.shelfName}
            </option>
          )}
        </select>
      </div>
    )
  }
}

export default ShelfChanger;
