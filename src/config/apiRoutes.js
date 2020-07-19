const apiEnvConfiguration = require("./apiConfig");
 
export const SERVER_URL = `${apiEnvConfiguration.dev.hostname}:${apiEnvConfiguration.dev.port}`;
export const DASHBOARD_URL = '/dashboard';
export const AUTH_URL = '/auth';