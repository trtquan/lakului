import './itemList.css'
import React from 'react';
import ItemCard from './itemCard';

class ItemList extends React.Component {

	itemListUI = () => {
		return this.props.items.map(item => {
			return (
				<ItemCard key={item.id} item={item}/>
			)
		})
	}

  render() {
		return (
			<div className="item-list">
				{this.itemListUI()}
			</div>
		)
	}
}

export default ItemList;