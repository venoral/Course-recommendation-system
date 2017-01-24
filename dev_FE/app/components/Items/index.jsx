/**
 * @file component Items
 */
import React, { PropTypes } from 'react';
import ItemCourse from '../ItemCourse';

const propTypes = {
	items: PropTypes.array.isRequired,
	gazeCurId: PropTypes.number,
	onSelect: PropTypes.func.isRequired
};

function Items({ items, gazeCurId, onSelect }) {
	const itemsContent = items.map((item) => {
		return <ItemCourse item={ item } key={ item.id } gazeCurId={ gazeCurId } onSelect={ onSelect }/>
	});

	return (
		<div className="list-group">
			{ itemsContent }
		</div>
	);
} 


Items.propTypes = propTypes;

export default Items;