import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesList from './components/ArticlesList'

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <ArticlesList />
    </>
  )
}

export default App
