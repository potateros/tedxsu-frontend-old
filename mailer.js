const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const CREDS = require('./creds.js');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

/* creds.js
module.exports = {
  email: '',
  pass: ''
}
*/

// POST route from contact form
app.post('/contact.html', function(req, res){
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: CREDS.credUser,
        pass: CREDS.credPass
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: CREDS.credUser,
    subject: 'New message from tedxsunwayuniversity.com contact form',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.subject}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response){
    if(error){
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  })

});
