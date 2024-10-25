const nodemailer = require("nodemailer");

const sendMail = (fullname, email, phone, message) => {

	
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			secure: true,
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
			logger: true, // logs to console
			debug: true   // include SMTP traffic in the logs
		});

		transporter.sendMail(
			{
				from: process.env.GMAIL_USER,
				to: process.env.RECEIVING_EMAIL,
				subject: `Quote from Online Uk Accountant`,
				text: `
				Name: ${fullname}
				Email: ${email}
                Phone: ${phone}
                
				Message:${message}
				`,
			},

			(error) => {
				console.log(error)
				if (!error) {
					resolve(true);
				} else {
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendMail;
