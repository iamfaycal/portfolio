const express = require("express");
const router = express.Router();
const helper = require('sendgrid').mail;

router.post("/", (req, res) => {
    var from_email = new helper.Email(req.body.email, req.body.name);
    var to_email = new helper.Email('contact@faycalhammoudi.fr');
    var subject = 'Message de la part de ' + req.body.name;
    var content = new helper.Content('text/plain', req.body.message);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, (error, result) => {
        if (result.statusCode == 202) {
            res.status(202);
            res.send('Ok');
        } else if (error) {
            res.status(503);
            res.send('Error');
        }
    });
});

module.exports = router;