import React from 'react';
import './itemCard.css'
class ItemCard extends React.Component {
  render() {
    console.log(this.props.item);

    const { description, urls, user } = this.props.item
    return (
      <div className="ui card item-card">
        <div className="image">
          <img alt={description}
            src={urls.small} />
        </div>
        <div className="content">
          <div className="header">{user.last_name}</div>
        </div>
        <div className="extra content">
          <div className="content">
            <div class="ui small header blue">Price:</div>
            <button className="ui basic green button">add to card</button>
        </div>
        </div>
      </div>
    )
  }
}

export default ItemCard;