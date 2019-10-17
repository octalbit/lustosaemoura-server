const nodemailer = require('nodemailer');

exports.send_email = function(req, res) {
	//const new_post= new Post(req.body);
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.USER_PASS
		}
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	// setup e-mail data with unicode symbols
	const mailOptions = {
		from: `${req.body.email}`, // sender address
		to: 'rafaelangical2@gmail.com, oi.jbss@gmail.com, drlustosapereira@gmail.com, lustosamoura9@gmail.com', // list of receivers
		subject: `${req.body.areaAtuacao}`, // Subject line
		text: `${req.body.message}`, //Hello world ✔', // plaintext body
		html: `
        <fieldset>
          <h4>Assunto: ${req.body.areaAtuacao}</h4
          <p>Cliente: ${req.body.name}</p>
          <p>Telefone: ${req.body.telefone}</p>
          <p>Email: ${req.body.email}</p>
          <br />
          <hr />
          <p>Mensagem: <br /> ${req.body.message}</p>
          <hr/>
        </fieldset>
        `
		// html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			res.send(error);
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
		res.send('ok');
	});
};
