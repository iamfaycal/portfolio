const express = require("express");
const router = express.Router();
const helper = require('sendgrid').mail;

router.post("/", (req, res) => {
    console.log(req.body);
    var from_email = new helper.Email('test@example.com');
    var to_email = new helper.Email('contact@faycalhammoudi.fr');
    var subject = 'Hello World from the SendGrid Node.js Library!';
    var content = new helper.Content('text/plain', 'Hello, Email!');
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, (error, res) => {
        console.log(res.statusCode);
        console.log(res.body);
        console.log(res.headers);
    });
});

module.exports = router;