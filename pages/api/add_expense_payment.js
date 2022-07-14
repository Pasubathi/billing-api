// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function addExpensePayment(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return addExpensePayment();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function addExpensePayment() {
            const { expense_id, paid_amount, payment_mode, payment_date } = req.body;
            if (expense_id == "" || expense_id == undefined)
                return res.status(200).send({ status:'error', message: "Expense id is mandatory" })
            if (paid_amount == "" || paid_amount == undefined)
                return res.status(200).send({ status:'error', message: "Paid Amount is mandatory" })
            if (payment_mode == "" || payment_mode == undefined)
                return res.status(200).send({ status:'error', message: "Payment Mode is mandatory" })
            if (payment_date == "" || payment_date == undefined)
                return res.status(200).send({ status:'error', message: "Payment Date is mandatory" })

            try {
                const expense = await prisma.expense__c.findUnique({
                    where: {
                        id: Number(expense_id)
                    }
                });
                if (!expense) {
                    return res.status(200).send({ status:'error',  message: "Invalid expense details" })
                } else {
                    await prisma.expense__c.update({
                        where:{
                            id: Number(expense_id)
                        },
                        data:{
                            paid_till__c: Number(paid_amount),
                            payment_date__c: new Date(payment_date),
                            mode_of_payment__c: String(payment_mode),
                            status__c: 'Paid'
                        }
                    });
                    return res.status(200).send({ status:'success',  message: "Payment added successfully"})
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

