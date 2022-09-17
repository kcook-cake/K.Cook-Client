const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/app', {
            target: 'https://prod.kcook-cake.com',
            // target: 'https://localhost:3000',
            changeOrigin: true,
        })
    );
};
