import { SERVER } from 'constants.js';


const clientList = {
  get: (userID) => fetch(`${SERVER}/clients?userID=${userID}`),
};

const sources = {
  clientList,
};

export default sources;
