// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function removePurchaseOrder(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return removePurchaseOrder();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function removePurchaseOrder() {
            const { purchase_id } = req.body;
            if (purchase_id == "" || purchase_id == undefined)
                return res.status(200).send({ status:'error',  message: "Purchase id is mandatory" })

            try {
                await prisma.pre_purchase__c.delete({
                    where: {
                        id: Number(purchase_id)
                    }
                });
                return res.status(200).send({ status:'success', message: "Purchase Removed Successfully" })
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

