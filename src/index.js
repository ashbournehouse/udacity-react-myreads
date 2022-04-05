import React from 'react';
//import {createRoot} from 'react-dom';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
//import Search from './Components/Search/search';
//import Browse from './Components/Browse/browse';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/*" element={<App />} />
		</Routes>
	</BrowserRouter>
)
