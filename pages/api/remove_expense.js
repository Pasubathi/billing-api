// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function removeExpense(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return removeExpense();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function removeExpense() {
            const { expense_id } = req.body;
            if (expense_id == "" || expense_id == undefined)
                return res.status(200).send({ status:'error',  message: "Expense id is mandatory" })

            try {
                await prisma.expense__c.delete({
                    where: {
                        id: Number(expense_id)
                    }
                });
                return res.status(200).send({ status:'success', message: "Expense Removed Successfully" })
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

