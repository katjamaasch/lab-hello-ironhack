import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logos">
            <img
              src="./images/ironhack-logo.svg"
              className="Ironhack-logo"
              alt="logo"
            />
            <img src="./images/menu-top.svg" className="App-logo" alt="logo" />
          </div>
          <div className="headline-and-copytext">
            <h1 className="hello-react-headline">
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn a Frontend
              <br />
              framework from scratch, to <br />
              become a Ninja Developer.
            </p>
            <form>
              <button className="awesome">Awesome!</button>
            </form>
          </div>
        </header>
        <div className="whitespace">
          <div>
            <img src="./images/icon1.png" className="Icons" alt="icon" />
            <h3 className="icontext">Declarative</h3>
            <p className="icontext">
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div>
            <img src="./images/icon2.png" className="Icons" alt="icon" />
            <h3 className="icontext">Components</h3>
            <p className="icontext">
              Build encapsulated components that manage their state.
            </p>
          </div>
          <div>
            <img src="./images/icon3.png" className="Icons" alt="icon" />
            <h3 className="icontext">Single-Way</h3>
            <p className="icontext">
              A set of immutable values are passed to the component's.
            </p>
          </div>
          <div>
            <img src="./images/icon4.png" className="Icons" alt="icon" />
            <h3 className="icontext">JSX</h3>
            <p className="icontext">
              Statically typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
