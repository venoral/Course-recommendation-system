/**
 * @file component Courses
 */
import './index.css';
import React from 'react';
import Items from '../Items';

import "babel-polyfill";
import "es5-shim";
import promise from 'es6-promise';
import 'fetch-detector';
import 'fetch-ie8';

promise.polyfill();
const Promise = promise.Promise;

import gaze from '../../../lib/wg.js';

class Courses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gazeCurId: gaze.gazeInfo.curId,
			items: []
		};
		this.selectCurCourse = this.selectCurCourse.bind(this);
	}
	selectCurCourse(id) {
		this.setState({
			gazeCurId: id
		});
	}
	componentDidMount() {
		async function setCourses(that) {
			try {
				let res = await fetch("http://localhost:8080/webGazer/servlet/CourseServlet?action=getall");
				let data = await res.json();
				that.setState({
					items: data
				});
			}catch(e) {
				console.log(e);
			}
		}
		setCourses(this);
		gaze.gazeInit();
	}
	render() {
		return (
			<Items items={ this.state.items } gazeCurId={ this.state.gazeCurId } onSelect={ this.selectCurCourse } />
		);
	}
}

export default Courses;