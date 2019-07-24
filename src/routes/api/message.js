const express = require("express");
const router = express.Router();
const helper = require('sendgrid').mail;
const fetch = require("node-fetch");

router.post("/", (req, res) => {
    // ReCaptcha verification
    if (req.body.name && req.body.email && req.body.message && req.body.recaptcha) {
        fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "secret=6Lc7WBIUAAAAADc7NyFymecOOYDL454YUJ3yGotb&response=" + req.body.recaptcha + "&remoteip=" + req.ip
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
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
                            res.status(400);
                            res.send("Votre message n'a pas pu être envoyé, veuillez reessayer plus tard");
                        }
                    });
                } else {
                    res.status(400);
                    res.send('ReCaptcha incorrect');
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400);
                res.send('Un erreur est survenue, veuillez essayer ulterieurement');
            })
    } else {
        res.status(400);
        res.send('Veuillez renseigner tous les champs du formulaire ainsi que la verification ReCaptcha');
    }
});

module.exports = router;