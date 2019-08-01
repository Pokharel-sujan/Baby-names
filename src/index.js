import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data';

require('normalize-css');  
require('./style.css');

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);


/* 

 Feed in the data to  this page.
 including the data and everything



1. Why do we have to use (normalize-css)??
2. 
  Special attention to <App data = {data}

*/ 