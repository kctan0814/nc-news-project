import axios from "axios";

const api = axios.create({baseURL: 'https://news-portfolio.onrender.com/api'})

export const getArticles = () => {
  return api.get('/articles')
    .then(({data}) => {
      return data;
    })
}

export const getArticleById = id => {
  return api.get(`/articles/11${id}`)
    .then(({data}) => {
      return data;
    })
}

export const getCommentsById = id => {
  return api.get(`articles/${id}/comment`)
    .then(({data}) => {
      return data;
    })
}