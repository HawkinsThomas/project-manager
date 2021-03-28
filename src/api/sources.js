import { SERVER } from 'constants.js';


const projectList = {
  get: (userID) => fetch(`${SERVER}/projects?userID=${userID}`),
  post: (data) => fetch(
    `${SERVER}/projects`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  ).then(() => data),
};

const clientList = {
  get: (userID) => fetch(`${SERVER}/clients?userID=${userID}`),
  post: (data) => fetch(
    `${SERVER}/clients`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  ).then(() => data),
};

const invoiceList = {
  get: (userID) => fetch(`${SERVER}/invoices?userID=${userID}`),
  post: (data) => fetch(
    `${SERVER}/invoices`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  ).then(() => data),
};


const sources = {
  projectList,
  clientList,
  invoiceList,
};

export default sources;
