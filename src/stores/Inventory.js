import { observable, action } from "mobx"
import { Item } from "./Item"

export class Inventory {
  @observable items = []
  @action checkItem = (itemName) => {
    let item = this.items.find((i) => i.name === itemName)
    item.completed = !item.completed
  }
  addItem = (name, price = 0, quantity = 1) => {
    let existingItem = this.items.find((item) => item.name === name)
    if (existingItem) {
      existingItem.quantity++
    } else {
      let newItem = new Item(name, price, quantity)
      this.items.push(newItem)
    }
  }
  changePrice = (itemName, newPrice) => {
    let item = this.items.find((i) => i.name === itemName)
    if (item && newPrice) {
      item.price = newPrice
    }
  }
  buyItem = (name, price) => {
    let itemIndex, item
    for (let i = 0; i < this.items.length; i++) {
      let itemName = this.items[i].name
      if (itemName === name) {
        itemIndex = i
        item = this.items[i]
        continue
      }
    }
    if (item) {
      if (item.quantity - 1 === 0) {
        this.items.splice(itemIndex, 1)
      } else {
        item.quantity--
      }
    }
  }
}
