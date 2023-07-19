import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ArticlesList from './components/ArticlesList'
import {Routes, Route} from 'react-router-dom'
import SingleArticle from './components/SingleArticle'
import Error from './components/Error'

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path="/*" element={<Error status={404} msg="Page not found" />} />
      </Routes>
      
    </>
  )
}

export default App
