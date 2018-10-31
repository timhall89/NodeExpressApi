var val = "my value"


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/NodeTest');

module.exports = {
    getValue: () => {
        var collection = db.get("mainCollection")
        var b
        return collection.find({},{}, function(err, docs) {
            return docs
          })
    },
    insertValue: (value) => {
        var collection = db.get("mainCollection")
        // Submit to the DB
    collection.insert(val, function (err, doc) {
            return err
    });
    }
    
}