import React, {Component} from 'react'

import './App.css'

import Persons from './components/Persons'

class App extends Component{
componentDidMount(){
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);
  return () => clearInterval(interval);
}
  render(){
    return(
    <div className="App">
      <Persons />
    </div>
  )
  }
}



export default App
