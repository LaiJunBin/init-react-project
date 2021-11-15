import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const message = useSelector((state) => state.messageReducer.message)
  return <div className="App">{message}</div>
}

export default App
