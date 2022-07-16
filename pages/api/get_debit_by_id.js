// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getDebitById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getDebitById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getDebitById() {
            const { debit_id } = req.body;
            if (debit_id == "" || debit_id == undefined)
                return res.status(200).send({ status:'error', message: "Debit note id is mandatory" })
            try {
                const debit = await prisma.debit_note__c.findUnique({
                    select:{
                        id: true,
                        account_id: true,
                        debit_note_no__c: true,
                        purchase_invoice_no__c: true,
                        vendor_gstin__c: true,
                        vendor_name__c: true,
                        vendor_address__c: true,
                        vendor_mob_no__c: true,
                        purchase_date__c: true,
                        date__c: true,
                        place_of_supply__c: true,
                        tax_type__c: true,
                        subtotal__c: true,
                        cgst__c: true,
                        sgst__c: true,
                        total_amount__c: true,
                        sale_preference__c: true,
                        purchase_note__c: true,
                        status__c: true
                    },
                    where: {
                        id: Number(debit_id)
                    }
                });
                if (!expense) {
                    return res.status(200).send({ status:'error',  message: "Invalid Debit" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: debit})
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

