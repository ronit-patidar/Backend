const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function (passport) {

    passport.use(
        new LocalStrategy(
            async (username, password, done) => {

                try {
                    // Find user
                    const user = await User.findOne({ username });

                    if (!user) {
                        return done(null, false, {
                            message: "User not found"
                        });
                    }

                    // Compare password
                    const isMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!isMatch) {
                        return done(null, false, {
                            message: "Incorrect password"
                        });
                    }

                    return done(null, user);

                } catch (error) {
                    return done(error);
                }
            }
        )
    );

    // Store user ID in session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Retrieve user using ID
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};