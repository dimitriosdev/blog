import mongoose, { Schema } from 'mongoose';
import { hashSync } from 'bcrypt-nodejs';
import validator from 'validator';

import { passwordReg } from './user.validations';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      messsage: '{VALUE} is not a valid email',
    },
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required'],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, 'UserName is required'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [6, 'Password need to be longer'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      messsage: '{VALUE} is not a valid password',
    },
  },
});

// eslint-disable-next-line func-names
UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    // eslint-disable-next-line no-underscore-dangle
    this.password = this._hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
};

export default mongoose.model('User', UserSchema);
