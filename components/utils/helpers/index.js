const CryptoJS = require('crypto-js');

let helpers = {};

helpers.getPasswordHash = function getPasswordHash (pw) {
    return CryptoJS.SHA256(pw).toString();
}

helpers.getArrayFromCSV = function getArrayFromCSV (csv) {
    return csv.split(',');
}

module.exports = helpers;
