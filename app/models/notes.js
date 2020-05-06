const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: Date,
    lastModifiedAt: { type: Date, default: Date.now },
    sharing: {
        enabled: Boolean,
        link: String
    }
});

const NotesModel = mongoose.model('NotesModel', NotesSchema);

export default NotesModel;