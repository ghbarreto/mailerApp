const   express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        nodemailer = require('nodemailer'),
        PORT = 8000;
const msg = "";
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index', {msg});
})

app.post('/send', (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'gbarretotest@gmail.com', // generated ethereal user
          pass: 'yourpasshere' // generated ethereal password
        }
    });
    let info = ({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "gh.barreto@hotmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });

    transporter.sendMail(info, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

    res.render('index', {msg: "SUCCESFUL"});;
})

app.listen(PORT, ()=> {
    console.log('server is listening on port ' + PORT);
});