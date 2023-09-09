import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import NewItem from './component/NewItem';

export default class App extends Component {
  render() {
    return (
      <>
       <Navbar title="College"/>
       <News/>
       <NewItem/>
      </>
      
      
    )
  }
}

