module.exports = function(){
    if(process.env.NODE_ENV && process.env.NODE_ENV === 'production'){
        return{
            db: process.env.DB,
            facebookAuth : {
                clientID: process.env.facebookClientID,
                clientSecret: process.env.facebookClientSecret,
                callbackURL: process.env.facebookCallbackURL,
            },

            twitterAuth : {
                'consumerKey': process.env.twitterConsumerKey,
                'consumerSecret': process.env.twitterConsumerSecret,
                'callbackURL': process.env.twitterCallbackURL
            }
        }
    } else {
        var auth = require('./config/authorization');
        return {
            db: 'mongodb://flootyboo:123fishsun7@ds019078.mlab.com:19078/giftapp',
            facebookAuth : {
                clientID: auth.facebookAuth.clientID,
                clientSecret: auth.facebookAuth.clientSecret,
                callbackURL: auth.facebookAuth.callbackURL
            },

            twitterAuth : {
                'consumerKey': auth.twitterAuth.consumerKey,
                'consumerSecret': auth.twitterAuth.consumerSecret,
                'callbackURL': auth.twitterAuth.callbackURL
            }
        }
    }

};
