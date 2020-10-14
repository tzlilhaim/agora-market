import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Inventory as inventoryStore } from "./stores/Inventory"
import { Provider } from "mobx-react"

const InventoryStore = new inventoryStore()
const stores = { InventoryStore }
ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
serviceWorker.unregister()
