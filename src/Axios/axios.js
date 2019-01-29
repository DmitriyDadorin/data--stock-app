import axios from 'axios'

export const axiosStock = axios.create({
  baseURL: 'https://data-stock-app.firebaseio.com/stock'
})