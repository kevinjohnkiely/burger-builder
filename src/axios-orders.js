import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kevins-burger-builder.firebaseio.com/'
});

export default instance;