import { guestInstance } from './index.js';

export const setAuthor = async (email, name) => {
  try {
    const response = await guestInstance.post('api/author/create', { email, name });
    return response;
  } catch (e) {
    alert(e.response);
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
