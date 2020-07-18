import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/views/AppNavBar";
import ShoppingList from "./components/views/ShoppingList";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
