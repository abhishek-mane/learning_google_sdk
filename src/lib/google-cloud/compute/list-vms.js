const
    // basics
    path = require('path'),
    // connection
    connect_gcp = require(
        path.join(global.webconfig.path.lib, 'google-cloud', 'authentication')
    ),
    // compute
    GoogleCompute = require('@google-cloud/compute'),
    compute = new GoogleCompute(),
    zone = compute.zone(global.webconfig.gcp.zone);

module.exports = (callback) => {
    connect_gcp();
    zone.getVMs((err, vms) => {
        if (err) {
            return callback(err);
        }
        return callback(null, vms);
    });
}