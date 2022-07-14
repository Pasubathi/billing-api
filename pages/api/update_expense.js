// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function updateExpense(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return updateExpense();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function updateExpense() {
            const { expense_id, vendor_invoice, expense_nature, hsn, expense_amount, invoice_date, vendor_gst, vendor_name, tax_rate, cess, igst, total, amount_paid  } = req.body;
            if (expense_id == "" || expense_id == undefined)
                return res.status(500).send({ message: "Expense id is mandatory" })
            if (expense_nature == "" || expense_nature == undefined)
                return res.status(500).send({ message: "Nature of expense is mandatory" })
            if (expense_amount == "" || expense_amount == undefined)
                return res.status(500).send({ message: "Expense Amount is mandatory" })
            if (invoice_date == "" || invoice_date == undefined)
                return res.status(500).send({ message: "Invoice Date is mandatory" })
            if (total == "" || total == undefined)
                return res.status(500).send({ message: "Total is mandatory" })
            if (amount_paid == "" || amount_paid == undefined)
                return res.status(500).send({ message: "Amount Paid is mandatory" })
            try {
                const accountDet = await prisma.expense__c.findUnique({
                    where: {
                        id: Number(expense_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid expense details" })
                } else {
                    await prisma.expense__c.update({
                        where:{
                            id: Number(expense_id)
                        },
                        data:{
                            vendor_invoice_no__c: String(vendor_invoice),
                            nature_of_expense__c: expense_nature,
                            hsn__c: String(hsn),
                            amount__c: Number(expense_amount),
                            date_of_expense__c: new Date(invoice_date),
                            vendor_gst__c: Number(vendor_gst),
                            vendor_name__c: String(vendor_name),
                            tax_rate__c: Number(tax_rate),
                            cess__c: String(cess),
                            igst__c: Number(igst),
                            total__c: Number(total),
                            amount_paid__c: amount_paid
                        }
                    });
                    return res.status(200).send({ status:'success',  message: "Expense added successfully"})
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

