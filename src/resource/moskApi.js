import axios from 'axios';

const url = { DATABASE: 'https://62ff47b19350a1e548db1f5e.mockapi.io' };

const setBaseUrl = url => (axios.defaults.baseURL = url);

export const getContactsApi = async () => {
  setBaseUrl(url.DATABASE);
  return await axios.get('/contacts').then(({ data }) => data);
};

export const addContactsApi = async contact => {
  setBaseUrl(url.DATABASE);
  return await axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContactsApi = async id => {
  setBaseUrl(url.DATABASE);
  return await axios.delete(`/contacts/${id}`).then(({ data }) => data);
};