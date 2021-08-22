import React, { Component } from 'react'
import'./App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Weather from './components/Weather/Weather'


class App extends Component {
 render () {
  
  return (
    <div><Header/>
      <main>
      <Route path='/weather' component={Weather}/>
      </main>
    </div>
  )
  }
}
export default App

    
    
   
