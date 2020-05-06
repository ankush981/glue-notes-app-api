// Attempt to connect to DB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.catch(err => {
    console.log('Horror! DB connection failed!');
    throw err;
});