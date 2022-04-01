const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const { v4: uuidv4 } = require('uuid');
const { generateToken}=require("../controllers/authentication")
const User = require("../model/user")

require("dotenv").config()

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    let user = await User.findOne({email : profile?._json?.email}).lean().exec()
    console.log(profile)
    if(!user){
      user = await User.create({
        firstName:profile.name.givenName,
        LastName:profile.name.familyName,
        email : profile._json.email,
        password : uuidv4(), 
      })
    }
    const token=generateToken(user)
    // console.log(profile)
    console.log(user)
    return cb(null, {user,token});
  }
));

module.exports = passport;