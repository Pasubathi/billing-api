// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function addPaymentOut(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return addPaymentOut();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function addPaymentOut() {
            const { user_id,  payment_type, payment_date, name, mobile_no, email, amount, payment_mode, note  } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            if (payment_type == "" || payment_type == undefined)
                return res.status(200).send({ status:'error', message: "payment type  is mandatory" })
            if (payment_date == "" || payment_date == undefined)
                return res.status(200).send({ status:'error', message: "payment date is mandatory" })
            if (name == "" || name == undefined)
                return res.status(200).send({ status:'error', message: "Vendor or customer name is mandatory" })
            if (email == "" || email == undefined)
                return res.status(200).send({ status:'error', message: "Email is mandatory" })
            if (mobile_no == "" || mobile_no == undefined)
                return res.status(200).send({ status:'error', message: "Mobile no is mandatory" })
            if (amount == "" || amount == undefined)
                return res.status(200).send({ status:'error', message: "Amount is mandatory" })
            if (payment_mode == "" || payment_mode == undefined)
                return res.status(200).send({ status:'error', message: "payment mode is mandatory" })
          
            try {
                const accountDet = await prisma.account__c.findUnique({
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid account details" })
                } else {
                    await prisma.payment_out__c.create({
                        data:{
                            account_id: Number(user_id),
                            payment_type__c: String(payment_type),
                            name__c: String(name),
                            mobile_no__c: String(mobile_no),
                            email__c: String(email),
                            amount__c: Number(amount),
                            payment_date__c: new Date(payment_date),
                            payment_mode: String(payment_mode),
                            note__c: String(note),
                        }
                    });
                  
                   
                    return res.status(200).send({ status:'success',  message: "Added successfully"})
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

