var express = require('express');
var router = express.Router();
var { encrypt } = require('../modules/security')
var {secretMessage, secretKey} = require('../conf.json')


router.post('/check', function (req, res) {
    let result = { success: false }
    if (req.body.lordName.toLowerCase() === "shay" || req.body.lordName.toLowerCase() === "shay malchi") {
        result.message = "My giant!! I have an encrypted mesasge for you. Only you posses the key to decrypt it: "
        console.log(secretKey)
        result.encrypted = encrypt(secretMessage, secretKey)
        result.success = true
    }

    return res.send(result);
});


module.exports = router;