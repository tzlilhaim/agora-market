import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import "./styles/App.css"
import Market from "./components/Market"
import Item from "./components/Item"

@inject("InventoryStore")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Agora Market</h2>
        <Market />
        <div id="items-in-inventory">
          {this.props.InventoryStore.items.map((item, index) => {
            return <Item key={`inventory-${index}`} item={item} />
          })}
        </div>
      </div>
    )
  }
}
export default App
