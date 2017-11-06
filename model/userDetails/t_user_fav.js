'use strict'
var db = require('../dbUtils')
var mysql = require('mysql');
/*
The model functions for t_user_fav table
 */
var getDetails = {

    fetch: function (options,cb) {
        var query = "select * from t_user_fav where user_id="+options.userId;
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
    fetchOnChannel: function (options,cb) {
        var query = "select * from t_user_fav where user_id="+options.userId+" and channel_id="+options.channelId;
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
    insert: function (options,cb) {
        var query = "insert into t_user_fav(user_id,channel_id) values("+options.userId+","+options.channelId+")";
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
    delete: function (options,cb) {
        var query = "delete from t_user_fav where id="+options.id;
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
module.exports = getDetails