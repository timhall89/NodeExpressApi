var val = "my value"


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/timothyCH');

module.exports = {
    getValue: () => val
}