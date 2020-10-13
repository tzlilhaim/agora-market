import React, { Component } from "react"
import { observer, inject } from "mobx-react"

@inject("InventoryStore")
@observer
class Market extends Component {
  handleChange = (e) => {
    let value = e.target.value
    this.setState({ newItem: value })
  }
  addItem = () => {
    this.props.InventoryStore.addItem(this.state.newItem)
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
