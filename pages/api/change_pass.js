// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function changePassword(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return changePassword();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function changePassword() {
            const { user_id, password, cpassword, current_password } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(500).send({ message: "User id is mandatory" })
            if (password == "" || password == undefined)
                return res.status(500).send({ message: "Password is mandatory" })
            if (cpassword == "" || cpassword == undefined)
                return res.status(500).send({ message: "Confirm password is mandatory" })
            if (current_password == "" || current_password == undefined)
                return res.status(500).send({ message: "Current password is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!user) {
                    return res.status(200).send({ status:'error',  message: "Invalid account" })
                } else {
                    if(user.password__c == cpassword)
                   {
                        if(password == cpassword)
                        {
                            await prisma.account__c.update({
                                data:{
                                    password__c: cpassword
                                },
                                where: {
                                    id: Number(user_id)
                                }
                            });
                            return res.status(200).send({ status:'success',  message: "Password Updated Successfully"})
                        }else{
                            return res.status(200).send({ status:'error',  message: "Password mismatch" })
                        }
                    }else{
                        return res.status(200).send({ status:'error',  message: "Current password does't match" })
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

