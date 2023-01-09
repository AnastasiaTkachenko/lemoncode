import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/transfer`;
const urlDos = `${process.env.BASE_API_URL}/account-list`;

export const insertTransfer = (transfer) =>
  Axios.post(url, transfer).then(({ data }) => data);


// get - recuperar info
// post - insertar datos
// put - actualizar datos
// delete - para borarr datos
