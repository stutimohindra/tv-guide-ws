'use strict'
var userFav = require('../model/userDetails/t_user_fav')
var user = require('../model/userDetails/t_users')
var async = require('async')

var fetchData={
    getUserFav:function getUserFav(req,res,next) {
        var opt ={
            facebookId: req.collectRequestDataGetUserFav.facebookId,
            name:req.collectRequestDataGetUserFav.name
        }
        async.waterfall([
            function fetch(cb) {
                user.fetch(opt,function (error,result) {
                    if(error){
                        res.send(new Error('Error occurred while fetching user'));
                    }else if(!error && result){
                        cb(null,result)
                    }
                })
            },
            function getuserFav(result,cb) {
                var opt={
                    userId: result[0].id,
                }
                userFav.fetch(opt,function (error,response) {
                    if(error){
                        res.send(new Error('Error occurred while inserting fav'));
                    }else if(!error && response){
                        cb(null,response)
                    }
                })
            },

        ], function (error, success) {
            if (error) {
                res.send(new Error('Error occurred while inserting fav'));
            }
            else if(!error && success){
                res.status(200).json({
                    error: 0,
                    message: "successfully fetched user fav",
                    data: success
                })
            };
        });
    },
    createUser: function createUser(req, res, next) {
        var opt ={
            facebookId: req.collectRequestDataUser.facebookId,
            name:req.collectRequestDataUser.name
        }
        user.fetch(opt,function (error,result) {
            if(error){
                res.status(500).json({
                    error: -1,
                    message: "error getting user for while creating user:"+error,
                })
            }else if(!error && result.length >0){
                res.status(200).json({
                    error: 0,
                    message: "user exists",
                    id: result[0].id
                })
            }else if(!error && result == 0){
                user.insert(opt,function (error,result) {
                    if(error){
                        res.status(500).json({
                            error: -1,
                            message: "error while creating user:"+error,
                        })
                    }else if(!error && result){
                        res.status(200).json({
                            error: 0,
                            message: "successfully inserted user",
                            id: result.insertId
                        })
                    }
                })
            }
        })

    },
    createUserFav : function (req,res,next) {
        var opt ={
            facebookId: req.collectRequestDataUserFav.facebookId,
            name:req.collectRequestDataUserFav.name
        }
        async.waterfall([
            function fetch(cb) {
                user.fetch(opt,function (error,result) {
                    if(error){
                        res.send(new Error('Error occurred while fetching user'));
                    }else if(!error && result){
                        cb(null,result)
                    }
                })
            },
            function insertFav(result,cb) {
            if(result.length == 0){
                cb(null,null)
            }
                var opt={
                    userId: result[0].id,
                    channelId:req.collectRequestDataUserFav.channelId
                }
                userFav.insert(opt,function (error,response) {
                    if(error){
                        res.send(new Error('Error occurred while inserting fav'));
                    }else if(!error && response){
                        cb(null,response)
                    }
                })
            },

        ], function (error, success) {
            if (error) {
                res.send(new Error('Error occurred while inserting fav'));
            }
            else if(!error && success){
                res.status(200).json({
                    error: 0,
                    message: "successfully created user fav",
                    id: success.insertId
                })
            };
        });
    }

}
module.exports = fetchData;
