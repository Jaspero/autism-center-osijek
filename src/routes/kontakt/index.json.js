import {createTransport} from 'nodemailer';
import {ENV_CONFIG} from '../../../env-config';

export function post(req, res) {
    const config = {
        transporter: {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: ENV_CONFIG.email.sender,
                pass: ENV_CONFIG.email.appPassword
            }
        },
        mail: {
            from: `"Webstranica" <info@jaspero.co>`,
            to: 'filip.lauc93@gmail.com',
            replyTo: req.body.email,
            subject: 'Novi upit sa web stranice',
            text: 'Učitajte ovu poruku sa preglednikom koji podržava html.',
            html: `<table>
                <tr>
                  <td>Ime</td>
                  <td>${req.body.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>${req.body.email}</td>
                </tr>
                <tr>
                  <td>Poruka</td>
                  <td>${req.body.message}</td>
                </tr>
              </table>`
        }
    };

    const transporter = createTransport(config.transporter);

    transporter.sendMail(config.mail, (err) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({error: err.toString()}))
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({success: true}))
        }
    });
}