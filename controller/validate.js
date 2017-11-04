'use strict'
var validate = {
    validateRequestDataUser: function validateRequestData(req, res, next) {

        if (req.body.facebookId != undefined && req.body.name != undefined ){
            next();
        }else {
            res.status(400).json({
                error: -1,
                message: "Missing params"
            })
        }

    },
    validateRequestDataUserFav:function validateRequestDataUserFav(req,res,next) {
        if (req.body.facebookId != undefined && req.body.name != undefined && req.body.channelId !=undefined){
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
    }

}
module.exports = validate;