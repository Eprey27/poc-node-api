function loggerMiddleware(req, res, next) {
    const start = Date.now();

    console.log(`Received ${req.method} request for ${req.url}`);

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request-${req.method}-${req.url} took ${duration}ms`);
    });

    next();
}

module.exports = loggerMiddleware;
