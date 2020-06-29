import React, { Component } from 'react';
import Item from './Item.js';
import PropType from 'prop-types';

class Items extends Component{
  static propTypes = {
    items: PropType.array.isRequired
  }
  render(){
    return(
      <span>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => (
            <Item item={item} key={index}/>
          ))}
        </ol>
      </span>
    );
  }
}

export default Items;