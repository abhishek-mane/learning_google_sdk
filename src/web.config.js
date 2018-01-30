let path = require('path');

module.exports = {
    port: 9000,
    static_prefix: '/static',
    logging: {
        logger: path.join(__dirname, 'server-config', 'winston'),
        log_dir: path.join(__dirname, '..', 'logs'),
        server_log_file: 'server.log',
        access_log_file: 'access.log',
        streaming_log_file: 'streaming.log',
        analyzer_log_file: 'analyzer.log',
        console_log_level: 'info',
        file_log_level: 'debug',
        maxLogFileSize: 5e+6, // Max size in bytes of the logfile, if the size is exceeded then a new file is created, a counter will become a suffix of the log file
        maxFiles: 10 // Limit the number of files created when the size of the logfile is exceeded.
    },
    path: {
        public: path.join(__dirname, 'public'),
        views: path.join(__dirname, 'views'),
        routes: path.join(__dirname, 'routes'),
        middlewares: path.join(__dirname, 'middlewares'),
        server_config: path.join(__dirname, 'server-config'),
        models: path.join(__dirname, 'models'),
        lib: path.join(__dirname, 'lib')
    },
    gcp:{
        zone: 'us-east1-b',
        GOOGLE_APPLICATION_CREDENTIALS: path.join(__dirname, 'creds.json')
    }
}