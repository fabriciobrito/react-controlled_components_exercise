import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteLastItem extends Component {
  static propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    noItemsCheck: PropTypes.func.isRequired
  };

  render(){
    return(
      <button onClick={this.props.deleteHandler} disabled={this.props.noItemsCheck()}>
        Delete Last Item
      </button>
    );
  }
}

export default DeleteLastItem;