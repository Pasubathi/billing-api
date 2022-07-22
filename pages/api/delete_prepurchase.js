// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function deletePrePurchase(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return deletePrePurchase();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function deletePrePurchase() {
            const { pre_purchase_id } = req.body;
            if (pre_purchase_id == "" || pre_purchase_id == undefined)
                return res.status(200).send({ status:'error', message: "Purchase id is mandatory" })
        
            try {
                const accountDet = await prisma.pre_purchase__c.findUnique({
                    where: {
                        id: Number(pre_purchase_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid purchase id" })
                } else {

                    const purOrder = await prisma.pre_purchase_order__c.findMany({
                        where: {
                            purchase_order_id__c: Number(pre_purchase_id)
                        }
                    });
                    if(purOrder)
                    {
                        await prisma.pre_purchase_order__c.delete({
                            where:{
                                purchase_order_id__c: Number(pre_purchase_id)
                            }
                        });
                    }


                    await prisma.pre_purchase__c.delete({
                        where:{
                            id: Number(pre_purchase_id)
                        }
                    });
                       
                    return res.status(200).send({ status:'success',  message: "Purchase deleted successfully"})
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

