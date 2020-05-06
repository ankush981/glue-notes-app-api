const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: Date,
    lastModifiedAt: { type: Date, default: Date.now },
    sharing: {
        enabled: Boolean,
        link: String
    }
});

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;