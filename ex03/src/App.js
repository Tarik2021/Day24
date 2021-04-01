import React, {Component} from "react";

class App extends Component {
  setLocalStorage = () => {
    setLocalStorage.setItem("Arena", "Selection Month");
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Click</button>
      </div>
    );
  }
}

export default App;
