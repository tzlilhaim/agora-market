import React, { Component } from "react"
import { observer } from "mobx-react"

@observer
class Market extends Component {
  handleChange = (e) => {
    let value = e.target.value
    this.setState({ newItem: value })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    return (
      <div id="market">
        <input
          id="add-item"
          placeholder="Add item"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addItem}>Add</button>
      </div>
    )
  }
}

export default Market
