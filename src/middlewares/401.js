module.exports = (response) => {
    return response.status(401).json({
        code: 401,
        message: 'Unauthorised request.'
    });
}