import React, { Component } from "react";
import { Provider } from "react-redux";
import { Page } from "./components/Page";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Page />
      </Provider>
    );
  }
}

export default App;
