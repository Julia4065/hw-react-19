import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <div className="remember">
        <input type="checkbox" name="remember" className="checkbox-remember" />
        <label htmlFor="remember">{this.props.text}</label>
      </div>
    )
  }
}

export default Checkbox;