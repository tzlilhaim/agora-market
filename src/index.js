import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Inventory } from "./stores/Inventory"

const inventory = new Inventory()

ReactDOM.render(
  <React.StrictMode>
    <App store={inventory} />
  </React.StrictMode>,
  document.getElementById("root")
)
serviceWorker.unregister()
