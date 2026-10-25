//Student Name: Steeve Tankeu
//Student ID: 1234891829
// Date: October 25, 2026

// Logs the method, URL, status code, and response time of every request
function loggerMiddleware(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });

  next(); // pass control to the next middleware or route
}

module.exports = loggerMiddleware;

