// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getExpenses(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getExpenses();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getExpenses() {
            const { user_id } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            try {
                const expenses = await prisma.expense__c.findMany({
                    select:{
                        id: true,
                        vendor_invoice_no__c: true,
                        nature_of_expense__c: true,
                        hsn__c: true,
                        amount__c: true,
                        date_of_expense__c: true,
                        vendor_gst__c: true,
                        vendor_name__c: true,
                        tax_rate__c: true,
                        cess__c: true,
                        igst__c: true,
                        total__c: true,
                        amount_paid__c: true,
                        created_date__c: true
                    },
                    where: {
                        account_id: Number(user_id)
                    }
                });
                return res.status(200).send({ status:'success', data: expenses });
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

