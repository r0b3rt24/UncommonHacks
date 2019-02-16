const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/login/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
		User.findOne({googleId:profile.id}).then((user)=>{
			if(user){
				done(null, user);
			}else{
				new User({
					userName: profile.displayName,
					googleId: profile.id
				}).save().then((user)=>{
					console.log('new User: '+ user);
					done(null, user);
				});
			}
		});
		

//		done();
    })
	
);