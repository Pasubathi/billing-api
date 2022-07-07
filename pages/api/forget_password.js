// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const nodemailer = require("nodemailer");
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function forgetPass(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return forgetPass();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function forgetPass() {
            const { email } = req.body;
            if (email == "" || email == undefined)
                return res.status(200).send({ status:'error', message: "Email is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    where: {
                        email__c: email
                    }
                });
                if (!user) {
                    return res.status(200).send({ status:'error',  message: "Invalid Email" })
                } else {
                    const transport = {
                        host: 'mail.ivagaminfotech.com', // Don’t forget to replace with the SMTP host of your provider
                        port: 465,
                        secure: false,
                        auth: {
                            user: 'vignesh@ivagaminfotech.com', // imported from the config.js
                            pass: 'iRjFTQ)XC&m*'
                        }
                    }
                    const transporter = nodemailer.createTransport(transport);
                    const mailData = {
                        from: 'vignesh@ivagaminfotech.com',
                        to: email,
                        subject: `Message From Ivagam`,
                        text: "Text Message",
                        html: <div>{'Text Message'}</div>
                       }
                       transporter.sendMail(mailData, function (err, info) {
                        if(err)
                          console.log('err', err)
                        else
                          console.log('info', info)
                      })
                    return res.status(200).send({ status:'success',  message: "Password sent successfully"})
                }
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

