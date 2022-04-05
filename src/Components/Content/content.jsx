import React from 'react';
import {Routes, Route, Outlet, Link} from 'react-router-dom'

import './content.css';

import Browse from '../Browse/browse.jsx'
import Search from '../Search/search.jsx'

class Content extends React.Component {

   render() {
      const {sortedShelvesWithBookAllocations} = this.props;

      return (
         <div className="content">
            <h2>Choose a Tab</h2>
            <p>Browse existing reads or search for new books and add them to the shelves.</p>
            <div className="tabs-holder">
               <div className="tab-1">
                  <Link to='/browse'><h4>Browse Books</h4></Link>
               </div>
               <div className="tab-2">
                  <Link to='/search'><h4>Search and Add</h4></Link>
               </div>
               <div className="tabbed-content">
                  <Routes>
                     <Route path="/"
                           element={<Browse
                                 sortedShelvesWithBookAllocations={sortedShelvesWithBookAllocations}
                           />}
                     />
                     <Route path="/browse"
                           element={<Browse
                                 sortedShelvesWithBookAllocations={sortedShelvesWithBookAllocations}
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

/*

       <Routes>
         <Route path="*" element={<BooksGrid />} />
         <Route path="search" element={<Search />} />
         <Route path="booksgrid" element={<BooksGrid />} />
       </Routes>

 *******************************************

   <div className="search-books-bar">
      <a className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}>
          Close
      </a>
      <div className="search-books-input-wrapper">
         {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
         *
         <input type="text" placeholder="Search by title or author"/>
      </div>
   </div>
   <div className="search-books-results">
      <ol className="books-grid"></ol>
   </div>
*/