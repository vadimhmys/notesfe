import axios from 'axios';
//import config from 'dotenv/config';

const guestInstance = axios.create({
  baseURL: 'https://notesbe-0033cba62263.herokuapp.com/',
});

export { guestInstance };
