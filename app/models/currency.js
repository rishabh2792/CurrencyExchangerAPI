const mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    CurrecySchema = new Schema({
        country: String,
        code: String,
        currecy: String,
    }, { timestamps: true });

module.exports = mongoose.model('Currecy', CurrecySchema);
