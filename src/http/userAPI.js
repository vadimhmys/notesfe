import { guestInstance } from './index.js';

export const setAuthor = async (email, name) => {
  try {
    const response = await guestInstance.post('/create', { email, name });
    const author = await response.json();
    return author;
  } catch (e) {
    alert(e.response.data.message);
    return false;
  }
};

export const getAllAuthors = async () => {
  try {
    const response = await guestInstance.get('api/author/getall');
    const authors = response.data;
    return authors;
  } catch (e) {
    alert(e.response);
    return false;
  }
};
