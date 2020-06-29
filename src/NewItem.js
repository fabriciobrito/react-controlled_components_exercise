import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewItem extends Component {
  static propTypes = {
    addHandler: PropTypes.func.isRequired
  };

  state = {
    value: ''
  };
  
  addItem = event => {
    event.preventDefault();
    this.props.addHandler(this.state.value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render(){
    return(
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()} onClick={this.addItem}>Add</button>
      </form>
    )
  }
}

export default NewItem;