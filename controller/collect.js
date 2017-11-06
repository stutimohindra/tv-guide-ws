'use strict'
/*
thees functions collect data from the front end
 */
var collect = {
    collectRequestDataUser: function collectRequestData(req, res, next) {
        var data = (req.body)
        var opt = {
            facebookId:data.facebookId,
            name:data.name,
        }
        req.collectRequestDataUser = opt;
        next();
    },
    collectRequestDataUserFav: function collectRequestDataUserFav(req, res, next) {
        var data = (req.body)
        var opt = {
            facebookId:data.facebookId,
            name:data.name,
            channelId:data.channelId
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
    },
    collectRequestDataUserFavUpdate: function collectRequestDataUserFavUpdate(req, res, next) {
        var opt = {
            facebookId:req.params.facebookId,
            name:req.params.name,
            channelId:req.params.channelId
        }
        req.collectRequestDataUserFavUpdate = opt;
        next();
    },
}
module.exports = collect;
