const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: [true, "id is required"],
        },
        username: {
            type: String,
            required: [true, "username is required"],
        },
        useremail: {
            type: String,
            required: [true, "email is required"],
        },
        password: {
            type: String,
            required: [true, " password is required"],
        },
        firstName: {
            type: Number,
            required: [true, "firstname is required"],
        },
        lastName: {
            type: Number,
            required: [true, "lastname is required"],
        },
        role: {
            type: String,
            required: [true, "role is required"],
        },
        gender: {
            type: String,
            required: [true, "gender is required"],
        },
        age: {
            type: Number,
            required: [true, "age is required"],
        },
        city: {
            type: String,
            required: [true, "city is required"],
        },
        salary: {
            type: Number,
            required: [true, "salary is required"],
        },
        skills: {
            type: [String],
            required: [true, "skills are required"],
        },
    }
)
const UserCollection = mongoose.model("users", userSchema);
module.exports = UserCollection;