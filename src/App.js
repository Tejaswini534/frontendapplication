import React, { Component } from 'react'
import Login from './components/login'
import Register from './components/register'
import Products from './components/products'
import Navigation from './components/navigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <navigation/>
        <Routes>
          <Route path="/" element={<login/>}/>
          <Route path="/register" element={<register/>}/>
          <Route path="/product" element={<products/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )}}