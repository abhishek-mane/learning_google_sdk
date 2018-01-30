module.exports = () => {
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        process.env.GOOGLE_APPLICATION_CREDENTIALS = global.webconfig.gcp.GOOGLE_APPLICATION_CREDENTIALS;
    }
    return;
}