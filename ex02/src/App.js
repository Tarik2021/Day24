import React, {Component} from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  getMyStorage = () => {
    var myCookieData = document.cookie.year;
    var myLocalStorageData = localStorage;
    var mySessionStorageData = sessionStorage;
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Click</button>
        <button onClick={this.getMyStorage}>Click</button>
      </div>
    );
  }
}

export default App;
