import React, { Component } from "react"
import { observer } from "mobx-react"
import "./styles/App.css"
import Market from "./components/Market"
import Item from "./components/Item"

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Agora Market</h2>
        <Market store={this.props.store} />
        <div id="items-in-inventory">
          {this.props.store.items.map((item, index) => {
            return <Item key={`inventory-${index}`} item={item} store={this.props.store}/>
          })}
        </div>
      </div>
    )
  }
}
export default App
