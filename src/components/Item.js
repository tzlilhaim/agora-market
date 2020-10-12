import React, { Component } from "react"
import { observer } from "mobx-react"

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const item = this.props.item
    const newPrice = prompt(
      "Please enter the item's updated price",
      `${item.price}`
    )
    if (newPrice && newPrice !== item.price) {
      this.props.store.editItem(item.name, newPrice)
    }
  }
  buyItem = () => {
    const item = this.props.item
    this.props.store.buyItem(item.name, item.price)
  }
  getPlural(item) {
    const lastCharIndex = item.length - 1
    const lastLetterOfItem = item.charAt(lastCharIndex)
    let pluralItems = item
    if (lastLetterOfItem === "s") {
      pluralItems = pluralItems + " items"
    } else {
      pluralItems = pluralItems + "s"
    }
    return pluralItems
  }
  render() {
    return (
      <li
        className={this.props.item.completed ? "crossed" : null}
        onDoubleClick={this.editItem}
      >
        {`${this.props.item.quantity} ${
          this.props.item.quantity > 1
            ? this.getPlural(this.props.item.name)
            : this.props.item.name
        } available at ${this.props.item.price}$ per item.`}
        <button className="buyButton" onClick={this.buyItem}>
          Buy
        </button>
      </li>
    )
  }
}
export default Item
