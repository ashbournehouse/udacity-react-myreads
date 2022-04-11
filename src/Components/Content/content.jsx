import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import './content.css';

import Browse from '../Browse/browse.jsx'
import Search from '../Search/search.jsx'

class Content extends React.Component {
  /****************************************************
  /* This component controls the display of all the
  /* requied 'tabbed' sub-pages and the switching
  /* between them.
  /*
  /* TO DO:
  /*   Currently data for the browse component is
  /*   prepared in the app component and a reasonably
  /*   complex object 'sortedShelvesWithBookAllocations'
  /*   gets passed thru' from App.js to the 'Browse'
  /*   component.
  /*
  /*   A better pattern might be to pass a function
  /*   to each component further down the hierarchy
  /*   that fetches and prepares the data required
  /*   by that component.
  ****************************************************/

   render() {
      const {sortedShelvesWithBookAllocations,
               dataForBookshelf,
               dataForShelfChanger,
               changeAllocation
            } = this.props;

      return (
         <div className="content">
            <h2>Choose a Tab</h2>
            <p>Browse existing reads or search for new books and add them to the shelves.</p>
            <div className="tabs-holder">
                  {/*
                   /* Use Link from React Routes to navigate
                   /* between tabs in this layout
                  */}
               <div className="tab-1">
                  <Link to='/browse'><h4>Browse Books</h4></Link>
               </div>
               <div className="tab-2">
                  <Link to='/search'><h4>Search and Add</h4></Link>
               </div>
               <div className="tabbed-content">
                     {/*
                      /* Use React Routes to select either the 'Browse'
                      /* or the 'Search' tabs and their associated
                      /* React components
                     */}
                  <Routes>
                     <Route path="/"
                           element={<Browse
                                 sortedShelvesWithBookAllocations={sortedShelvesWithBookAllocations}
                                 dataForBookshelf ={dataForBookshelf}
                                 dataForShelfChanger = {dataForShelfChanger}
                                 changeAllocation = {changeAllocation}
                           />}
                     />
                     <Route path="/browse"
                           element={<Browse
                                 sortedShelvesWithBookAllocations={sortedShelvesWithBookAllocations}
                                 dataForBookshelf ={dataForBookshelf}
                                 dataForShelfChanger ={dataForShelfChanger}
                                 changeAllocation = {changeAllocation}
                           />}
                     />
                     <Route path="/search"
                           element={<Search />}
                     />
                  </Routes>
               </div>
            </div>
         </div>
      )
   }
}

export default Content
