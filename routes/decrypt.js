var express = require('express');
var router = express.Router();
var { decrypt } = require('../modules/security')
var {secretMessage} = require('../conf.json')


router.post('/decrypt', function (req, res) {
    let result = { success: false }
    if (!req.body || !req.body.key) {
        result.message = "Please provide key!"
    }
    else if (!req.body.encrypted) {
        result.message = "Please provide encrypted message!"
    }
    else {
        result.decrypted = decrypt(req.body.encrypted, req.body.key)
        if (result.decrypted === secretMessage) {
            result.thanksLink = "https://saltsecurity.slack.com/archives/D013L9AA1P0"
            result.success = true
        }
    }

    return res.send(result);
})


module.exports = router;