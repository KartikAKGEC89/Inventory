const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const { string } = require('@hapi/joi')
const number = require('@hapi/joi/lib/types/number')

const UserSchema =new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
    },
    studentname: {
      type: String,
      required: true,
      unique: true
    },
    studentnumber: {
      type: String,
      required: true,
      unique: true
    },
    section: {
      type: String,
      required: true,
    },
    Branch: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
      },
})


UserSchema.pre('save', async function (next) {
  try{
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(this.password, salt)
       this.password = hashedPassword
       next()
  }catch (error) {
    next(error)
  }
})

UserSchema.methods.isValidPassword = async function (password) {
  try {
     return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

const User = mongoose.model('user', UserSchema)
module.exports = User