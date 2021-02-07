import config from './config';

// mode dev || prod
const active = config.get('prod');

const DEV_API = active.DEV_API;
const MOCK_API = active.MOCK_API;
const SENTRY_DSN = active.SENTRY_DSN;

export {DEV_API, MOCK_API, SENTRY_DSN};
