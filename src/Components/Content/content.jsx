/*************************************************
   This stateless functional component merely
   displays a 'branded' footer with a very small
   amount of useful information.
*************************************************/
import React from 'react';

import './content.css';

function Content(props) {
   return (
      <div className="content">
         <h2>Choose a Tab</h2>
         <p>Browse existing reads or search for new books and add them to the shelves.</p>
         <div className="tabs-holder">
            <div className="tab-1"><h4>Browse</h4></div>
            <div className="tab-2"><h4>Search and Add</h4></div>
            <div className="tabbed-content"><h4>Tabbed Content</h4></div>
         </div>
      </div>
   )
}

export default Content

/*

       <Routes>
         <Route path="*" element={<BooksGrid />} />
         <Route path="search" element={<Search />} />
         <Route path="booksgrid" element={<BooksGrid />} />
       </Routes>

*/