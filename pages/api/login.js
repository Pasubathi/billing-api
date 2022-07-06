// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function loginHandler(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return login();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function login() {
            const { email, password } = req.body;
            if (email == "" || email == undefined)
                return res.status(500).send({ message: "Email is mandatory" })
            if (password == "" || password == undefined)
                return res.status(500).send({ message: "Password is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    select:{
                        name__c: true,
                        phone__c: true,
                        email__c: true
                    },
                    where: {
                        email__c: email
                    }
                });
                if (!user) {
                    return res.status(200).send({ status:'error',  message: "Invalid Login crentials" })
                } else {
                   if(user.password__c == password)
                   {
                        return res.status(200).send({ status:'success',  message: "Login successfully", data: user})
                   }else{
                        return res.status(200).send({ status:'error',  message: "Invalid Login crentials" })
                   }
                }
            } catch (e) {
                res.status(500).send({ message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(500).send({ message: error.message ? error.message : error })
    } // get mobile number process

}

