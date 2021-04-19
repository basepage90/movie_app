const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        createProxyMiddleware( '/api', {
            target: 'https://openapi.naver.com',
            changeOrigin: true,
            pathRewrite:{ '^/api/':'/' }
        })
    )
    app.use(
        createProxyMiddleware( '/poster', {
            target: 'https://movie.naver.com/movie',
            changeOrigin: true,
            pathRewrite:{ '^/poster/':'/' }
        })
    )
};
