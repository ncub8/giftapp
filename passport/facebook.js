var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var auth = require('../config/authorization');

module.exports = function(passport){

    passport.use('facebook', new FacebookStrategy({
            clientID: auth.facebookAuth.clientID,
            clientSecret: auth.facebookAuth.clientSecret,
            callbackURL: auth.facebookAuth.callbackURL
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOne({ 'facebook.id': profile.id }, function (err, user) {
                if(err){
                    return done(err);
                } else if (user) {
                    return done(null, user);
                } else {
                    var newUser = new User();
                    newUser.facebook.id = profile.id;
                    newUser.facebook.token = accessToken;
                    newUser.firstName = profile.first_name;
                    newUser.lastName = profile.last_name;
                    newUser.email = profile.emails[0].value;

                    newUser.save(function(err){
                        if(err){
                            throw err;
                        }else{
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
}