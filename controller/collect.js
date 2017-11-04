'use strict'
var collect = {
    collectRequestDataUser: function collectRequestData(req, res, next) {
        var opt = {
            facebookId:req.body.facebookId,
            name:req.body.name,
        }
        req.collectRequestDataUser = opt;
        next();
    },
    collectRequestDataUserFav: function collectRequestDataUserFav(req, res, next) {

        var opt = {
            facebookId:req.body.facebookId,
            name:req.body.name,
            channelId:req.body.channelId
        }
        req.collectRequestDataUserFav = opt;
        next();
    },
    collectRequestDataGetUserFav:function collectRequestDataGetUserFav(req,res,next) {

        var opt = {
            facebookId:req.params.facebookId,
            name:req.params.name,
        }
        req.collectRequestDataGetUserFav = opt;
        next();
    }
}
module.exports = collect;