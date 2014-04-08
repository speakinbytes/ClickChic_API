var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User
var Seller = new Schema({
    sellerName: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Seller.methods.encryptPassword = function(password) {
//     return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
//     //more secure - return crypto.pbkdf2Sync(password, this.salt, 10000, 512);
// };

// Seller.virtual('sellerId')
//     .get(function () {
//         return this.id;
//     });

// Seller.virtual('password')
//     .set(function(password) {
//         this._plainPassword = password;
//         this.salt = crypto.randomBytes(32).toString('base64');
//         //more secure - this.salt = crypto.randomBytes(128).toString('base64');
//         this.hashedPassword = this.encryptPassword(password);
//     })
//     .get(function() { return this._plainPassword; });


// Seller.methods.checkPassword = function(password) {
//     return this.encryptPassword(password) === this.hashedPassword;
// };

var SellerModel = mongoose.model('Seller', Seller);