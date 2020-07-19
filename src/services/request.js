import { SERVER_URL } from '../config/apiRoutes';

const axios = require('axios').default;

const instance = axios.create({
    baseURL: SERVER_URL
});

instance.interceptors.request.use(request => {
    // Get token from cookie/session of the browser
    const token = sessionStorage.getItem('token');
    if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
    }
    return request;
});

export default instance;