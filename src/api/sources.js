import { SERVER } from 'constants.js';


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

const sources = {
  clientList,
};

export default sources;
