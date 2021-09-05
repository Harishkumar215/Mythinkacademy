const mongoose = require('mongoose')

const chatRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Chatroom", chatRoomSchema)