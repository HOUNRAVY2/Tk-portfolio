import qs from 'qs';
import { getCMSDomain, getAPIToken, getStrapiMedia } from '../utilities/dev';

export const fetchDataByGet = (url, params = {}) => {
  const newParams = `${
    Object.keys(params).length > 0 ? `?${new URLSearchParams(params).toString()}` : ''
  }`;

  return `${getCMSDomain()}${url}${newParams}`;
};

export const fetchImage = (url) => {
  return `${getStrapiMedia}${url}`;
};

export const requestInit = (body, method = 'POST') => {
  return {
    headers: {
      Authorization: `Bearer ${getAPIToken()}`,
      accept: 'application/json, text/plain, */*',
      'accept-language': 'fr-FR,fr;q=0.9,en;q=0.8',
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    method,
    body: JSON.stringify(body),
    mode: 'cors',
  };
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// fetch data with api token

export const fetchDataByGetToken = (url, params = {}) => {
  const queryString =
    Object.keys(params).length > 0 ? `?${qs.stringify(params, { encodeValuesOnly: true })}` : '';

  const apiUrl = `${getCMSDomain()}/api${url}${queryString}`;
  return apiUrl;
};

export const headers = {
  Authorization: `Bearer ${getAPIToken()}`,
  'Content-Type': 'application/json', // Adjust content type if needed
};

export const fetcher2 = (url) => fetch(url, { headers }).then((res) => res.json());
