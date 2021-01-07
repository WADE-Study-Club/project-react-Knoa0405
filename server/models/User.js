import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import userEvent from '@testing-library/user-event';

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 80,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 80,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(user.password, salt, (bcryptError, hash) => {
        user.password = hash;

        return bcryptError ? next(bcryptError) : next();
      });
      return err ? next(err) : null;
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password,
    (err, isMatch) => ((err) ? callback(err) : callback(null, isMatch)));
};

userSchema.methods.generateToken = function (callback) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;

  user.save((err, savedUser) => (err ? callback(err) : callback(null, savedUser)));
};

userSchema.statics.findByToken = function (token, callback) {
  const user = this;

  jwt.verify(token, 'secretToken', (err, decoded) => {
    user.findOne({ _id: decoded, token },
      (err, user) => ((err) ? callback(err) : callback(null, user)));
  });
};

const User = mongoose.model('User', userSchema);

export default User;
