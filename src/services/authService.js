import { AUTH_URL } from '../config/apiRoutes';
import request from './request';

class AuthService {
    async login(data) {
        return request(`${AUTH_URL}/login`, { method: 'POST', data });
    }
}

export default new AuthService();