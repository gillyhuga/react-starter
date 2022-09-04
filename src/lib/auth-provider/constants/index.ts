const APP_NAME = require('../../../../package.json').name;

const ENVIRONMENT = process.env.REACT_APP_STAGE || 'local';

export const TOKEN_STORAGE_KEY = `${APP_NAME}_${ENVIRONMENT}_token`;
