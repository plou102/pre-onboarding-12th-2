import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

function getHeader(option) {
  const header = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
  };
  if (option) Object.assign(header, option);
  return header;
}

function axiosApi(url, options) {
  const instance = axios.create({
    baseURL: url,
    headers: getHeader(),
    ...options,
  });
  return instance;
}

export const defaultInstance = axiosApi(process.env.REACT_APP_BASE_URL);
