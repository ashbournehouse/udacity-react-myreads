import React from 'react';

import './shelfchanger.css'


class ShelfChanger extends React.Component {

  state = {
    shelvesData: [],
    selectedShelf: "",
  }


  constructor(props) {
    super(props);
    const tempShelvesData = this.state.shelvesData.slice(0);
    const {shelfName, shelves, changeAllocation} = this.props;
    changeAllocation
      //
      // Update the state from props before rendering
      //
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
    tempShelvesData.map(tempShelfData => {
      if (tempShelfData.shelfSelected === true) {
        this.state.selectedShelf = tempShelfData.shelfValue;
      }
    })
    this.state.shelvesData = tempShelvesData;
    console.log('Updated state is:');
    console.log(JSON.stringify(this.state));
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
  }

  handleSelect = (event) => {
    const {changeAllocation} = this.props;
    console.log(`Selected value is: ${event.target.value}`);
    this.state.selectedShelf = event.target.value;
    changeAllocation(4,1);
    console.log('In handleSelect - updated state is:');
    console.log(JSON.stringify(this.state));
    console.log('***********************************');
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
        <select onChange={this.handleSelect}
                defaultValue={this.state.selectedShelf}
        >
          <option value="move" disabled>Move to...</option>
          {this.state.shelvesData.map(thisShelf =>
            <option key={thisShelf.shelfValue}
                    value={thisShelf.shelfValue}
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
