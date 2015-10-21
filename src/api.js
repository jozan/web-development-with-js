import axios from 'axios';

export default {
  getTussit() {
    return axios.get('/api/tussi').then(response => response.data);
  }
}
