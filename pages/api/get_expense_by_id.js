// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getExpenseById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getExpenseById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getExpenseById() {
            const { expense_id } = req.body;
            if (expense_id == "" || expense_id == undefined)
                return res.status(500).send({ message: "Expense id is mandatory" })
            try {
                const expense = await prisma.expense__c.findUnique({
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
                    },
                    where: {
                        id: Number(expense_id)
                    }
                });
                if (!expense) {
                    return res.status(200).send({ status:'error',  message: "Invalid Expense" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: expense})
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

