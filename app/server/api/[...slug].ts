import { createRouter, defineEventHandler, useBase } from 'h3';
import { healthHandler } from './handlers/health';
import { signupHandler, loginHandler } from './handlers/auth';

const router = createRouter();

router.get('/health', defineEventHandler(healthHandler))

router.post('/auth/signup', defineEventHandler(signupHandler))

router.post('/auth/login', defineEventHandler(loginHandler))

export default useBase('/api', router.handler);