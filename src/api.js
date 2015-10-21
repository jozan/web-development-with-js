import axios from 'axios';
import { List } from 'immutable';

export default {
  getTussit() {
    return axios.get('/api/tussi').then(response => response.data);
  },
  getBoards() {
    return axios.get('api/boards').then(response => List(response.data));
  }
}
