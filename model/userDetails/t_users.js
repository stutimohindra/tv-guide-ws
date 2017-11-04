'use strict'
var db = require('../dbUtils')
var mysql = require('mysql');

var userDetails = {

    fetch: function (options, cb) {
        var query = "select * from t_users where facebook_id=" + options.facebookId +" and name='"+options.name+"'";
        db.executeQuery(query, function (err, result) {
            if (!err && result) {
                cb(null, result);
            } else {
                console.log("Error while fetching details ");
                console.log(err);
                cb(err);
            }
        });
    },
    insert:function (options,cb) {
        var query = "insert into t_users(facebook_id,name) values("+options.facebookId+",'"+options.name+"')";
        db.executeQuery(query, function (err, result) {
            if (!err && result) {
                cb(null, result);
            } else {
                console.log("Error while fetching details ");
                console.log(err);
                cb(err);
            }
        });
    }
}
module.exports = userDetails