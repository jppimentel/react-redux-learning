import React, {Component} from "react";
import {Provider} from "react-redux";

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
        <h1>teste</h1>
      </Provider>
    </div>
  );
}

export default App;
