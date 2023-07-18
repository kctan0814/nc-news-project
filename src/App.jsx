import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesList from './components/ArticlesList'
import {Routes, Route} from 'react-router-dom'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
      
    </>
  )
}

export default App
