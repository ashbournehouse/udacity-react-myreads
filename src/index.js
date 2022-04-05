import React from 'react';
//import {createRoot} from 'react-dom';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Search from './Components/Search/search';
import Booksgrid from './Components/Booksgrid/booksgrid';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<App />}>
			{/*}
				<Route path="search" element={<Search />} />
				<Route path="booksgrid" element={<Booksgrid />} />
				<Route path="*" element={<Booksgrid />} />
			*/}
			</Route>
		</Routes>
	</BrowserRouter>
)
