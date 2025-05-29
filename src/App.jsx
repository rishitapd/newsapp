import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import NewItem from './component/NewItem'

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>
         <News pageSize={6}/>
         <NewItem/>
      </div>
    )
  }
}


