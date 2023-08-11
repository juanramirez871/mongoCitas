import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
})