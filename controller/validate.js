'use strict'
/*
These functions validate if all the expected params are being sent by the front end
 */
var validate = {
    validateRequestDataUser: function validateRequestData(req, res, next) {

        var data = (req.body);

        if (data.facebookId != undefined && data.name != undefined ){
            next();
        }else {
            res.status(400).json({
                error: -1,
                message: "Missing params"
            })
        }

    },
    validateRequestDataUserFav:function validateRequestDataUserFav(req,res,next) {
        var data = (req.body);

        if (data.facebookId != undefined && data.name != undefined && data.channelId !=undefined){
            next();
        }else {
            res.status(400).json({
                error: -1,
                message: "Missing params"
            })
        }
    },
    validateRequestDataGetUserFav:function validateRequestDataGetUserFav(req,res,next) {
        if (req.params.facebookId != undefined && req.params.name != undefined ){
            next();
        }else {
            res.status(400).json({
                error: -1,
                message: "Missing params"
            })
        }
    },
    validateRequestDataGetUserFavUpdate:function validateRequestDataGetUserFavUpdate(req,res,next) {
        if (req.params.facebookId != undefined && req.params.name != undefined && req.params.channelId != undefined){
            next();
        }else {
            res.status(400).json({
                error: -1,
                message: "Missing params"
            })
        }
    }
}
module.exports = validate;
