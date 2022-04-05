import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

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
