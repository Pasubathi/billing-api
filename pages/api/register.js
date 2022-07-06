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
            const { name, email, password, cpassword, phone } = req.body;
            if (name == "" || name == undefined)
                return res.status(500).send({ message: "Name is mandatory" })
            if (phone == "" || phone == undefined)
                return res.status(500).send({ message: "Phone is mandatory" })
            if (email == "" || email == undefined)
                return res.status(500).send({ message: "Email is mandatory" })
            if (password == "" || password == undefined)
                return res.status(500).send({ message: "Password is mandatory" })
            if (cpassword == "" || cpassword == undefined)
                return res.status(500).send({ message: "Confirm password is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    where: {
                        email__c: email
                    }
                });
                if (!user) {
                    if(password == cpassword)
                    {
                        const createUser = await prisma.account__c.create({
                            data:{
                                name__c: name,
                                phone__c: String(phone),
                                email__c: email,
                                password__c: cpassword
                            }
                        });
                        return res.status(200).send({ status:'success',  message: "Invalid Login crentials" })
                    }else {
                        return res.status(200).send({ status:'error',  message: "Password mismatch" })
                    }
                } else {
                    return res.status(200).send({ status:'error',  message: "Email already exist" })
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

