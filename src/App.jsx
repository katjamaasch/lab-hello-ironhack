import React, { Component } from 'react';
// import logo from './logo.svg';
import Icons from './Components/Icons';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Icons
        firstheadline="Declarative"
        firsttext="React makes it painless to create interactive UIs."
        secondheadline="Components"
        secondtext="Build encapsulated components that manage their state."
        thirdheadline="Single-Way"
        thirdtext="A set of immutable values are passed to the component's."
        fourthheadline="JSX"
        fourthtext="Statically typed, designed to run on modern browsers."
      />
    </div>
  );
}

export default App;
