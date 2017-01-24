/**
 * @file app main file
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './components/Courses';
 
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Courses />, app); 