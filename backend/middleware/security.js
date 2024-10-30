const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const csrf = require('csurf');
const cors = require('cors');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware configuration function
const configureSecurityMiddleware = (app) => {
  // Basic security headers
  app.use(helmet());
  
  // Rate limiting
  app.use('/api/', limiter);
  
  // Data sanitization against NoSQL query injection
  app.use(mongoSanitize());
  
  // Data sanitization against XSS
  app.use(xss());
  
  // Enable CORS
  app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  }));
  
  // CSRF protection
  app.use(csrf({ cookie: true }));
  
  // Error handler for CSRF token errors
  app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
      res.status(403).json({
        status: 'error',
        message: 'Invalid CSRF token'
      });
    } else {
      next(err);
    }
  });
};

module.exports = configureSecurityMiddleware;

