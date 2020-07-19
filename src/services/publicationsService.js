import { DASHBOARD_URL } from '../config/apiRoutes';
import request from './request';

export async function getPublications() {
    return request(`${DASHBOARD_URL}/publications`);
}
