const User = require("../model/UserModel")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "talhaAnjum",
}

const stratergy = new JwtStrategy(options, (payload, done) => {
	User.findById(payload.id)
		.then((user) => {
			if (user) {
				return done(null, user)
			} else {
				return done(null, false)
			}
		})
		.catch((err) => done(err, null))
})

module.exports = (passport) => {
	passport.use(stratergy)
}
