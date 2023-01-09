import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/movements`;
const urlDos = `${process.env.BASE_API_URL}/account-list`;

export const getMovementList = () => Axios.get(url).then(({ data }) => data);

export const getAccountMovement = (id) => Axios.get(urlDos, { params: { id } }).then(({ data }) =>
data);

