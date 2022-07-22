// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function deleteDebit(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return deleteDebit();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function deleteDebit() {
            const { debit_id } = req.body;
            if (debit_id == "" || debit_id == undefined)
                return res.status(200).send({ status:'error', message: "Debit note id is mandatory" })
        
            try {
                const accountDet = await prisma.debit_note__c.findUnique({
                    where: {
                        id: Number(debit_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid debit note id" })
                } else {

                    const debitOrder = await prisma.debit_order__c.findUnique({
                        where: {
                            debit_note_id__c: Number(debit_id)
                        }
                    });
                    if(debitOrder)
                    {
                        await prisma.debit_order__c.delete({
                            where:{
                                debit_note_id__c: Number(debit_id)
                            }
                        });
                    }
                    await prisma.debit_note__c.delete({
                        where:{
                            id: Number(debit_id)
                        }
                    });
                       
                    return res.status(200).send({ status:'success',  message: "Purchase debit note deleted successfully"})
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

