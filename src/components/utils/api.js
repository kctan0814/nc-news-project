import axios from "axios";

const api = axios.create({baseURL: 'https://news-portfolio.onrender.com/api'})

export const getArticles = () => {
  return api.get('/articles')
    .then(({data}) => {
      return data;
    })
}

export const getArticleById = id => {
  return api.get(`/articles/${id}`)
    .then(({data}) => {
      return data;
    })
}

export const getCommentsById = id => {
  return api.get(`/articles/${id}/comments`)
    .then(({data}) => {
      return data;
    })
}

export const patchArticle = (id, body) => {
  return api.patch(`/articles/${id}`, body)
  .then(({data}) => {
    console.log(data)
  })
}