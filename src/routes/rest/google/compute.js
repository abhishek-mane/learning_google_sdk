const
    // basics
    path = require('path'),
    // express
    express = require('express'),
    router = express.Router(),
    // errors
    { internalServerError } = require(global.webconfig.path.middlewares),
    // buisness logic
    { getVMs } = require(path.join(global.webconfig.path.lib, 'google-cloud', 'compute'));

router.get('/instances', (req, res) => {
    getVMs((err, vms) => {
        if (err) {
            console.log(err);
            return internalServerError(res);
        }
        return res.json({
            data: vms
        })
    })
});

router.post('/instances', (req, res) => {
    
});

//export this router to use in our index.js
module.exports = router;