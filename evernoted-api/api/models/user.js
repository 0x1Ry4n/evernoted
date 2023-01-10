const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const WORK_HASH_SALT = 10;


let userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

userSchema.pre('save', function (next) {  // antes de exportar o model, gere o hash para a password
    if (this.isModified('password')) {
        bcrypt.hash(this.password, WORK_HASH_SALT,
            (err, hashedPassword) => {
                if (err) return next(err)

                this.password = hashedPassword;
                next();
            }
        )
    }
});

userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, (err, same) => {
        if (err) next()

        next(err, same);
    });
}

module.exports = mongoose.model('User', userSchema);


