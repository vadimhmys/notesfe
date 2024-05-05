import axios from 'axios';
//import config from 'dotenv/config';

const guestInstance = axios.create({
  baseURL: 'https://rocky-garden-32562-a0a3b57853f8.herokuapp.com/',
});

export { guestInstance };
