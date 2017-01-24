/**
 * @file component ItemCourse
 */
import './index.css';
import React, { PropTypes } from 'react';

const propTypes = {
	item: PropTypes.object.isRequired,
	gazeCurId: PropTypes.number,
	onSelect: PropTypes.func.isRequired
}

function ItemCourse({ item, gazeCurId, onSelect }) {
	return (
		<div className={ item.id === gazeCurId ? `gazeCur item item-course-` + item.id : `item item-course-` + item.id } onMouseOver={() => { onSelect(item.id); } } >
			<h3 className="name">{ item.name }</h3>
			<p className="info">{ item.briefInfo }</p>
		</div>
	);
}


ItemCourse.propTypes = propTypes;

export default ItemCourse;