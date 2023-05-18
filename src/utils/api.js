import Api from '../components/Api.js';

const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-65';
const headers = {
  authorization: '76bd6af4-1eb8-427e-97cd-2bc6cdc45941',
  'Content-Type': 'application/json'
}

const api = new Api({baseUrl,  headers});

export default api;