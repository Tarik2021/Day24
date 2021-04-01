import React, {Component} from "react";

class App extends Component {
  setLocalStorage = () => {
    setLocalStorage.setItem("Arena", "Selection Month");
  };
  getLocalStorage = () => {
    var myLocalStorageData = setLocalStorage;
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Click</button>
        <button onClick={this.getLocalStorage}>Click</button>
      </div>
    );
  }
}

export default App;
