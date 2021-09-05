import React, { Component } from 'react'
import'./App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Weather from './components/Weather/Weather'
import Momentum from './components/Momentum/Momentum'


class App extends Component {
 render () {
  
  return (
    <div><Header/>
      <main>
        <Route exact path='/weather' component={Weather}/>
        <Route exact path='/momentum' component={Momentum}/>
      </main>
    </div>
  )
  }
}
export default App

    
    
   
