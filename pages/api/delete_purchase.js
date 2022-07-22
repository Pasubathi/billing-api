// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function deletePurchase(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return deletePurchase();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function deletePurchase() {
            const { purchase_id } = req.body;
            if (purchase_id == "" || purchase_id == undefined)
                return res.status(200).send({ status:'error', message: "Purchase id is mandatory" })
        
            try {
                const accountDet = await prisma.purchase__c.findUnique({
                    where: {
                        id: Number(purchase_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid purchase id" })
                } else {

                    const purOrder = await prisma.purchase_order__c.findUnique({
                        where: {
                            purchase_id__c: Number(purchase_id)
                        }
                    });
                    if(purOrder)
                    {
                        await prisma.purchase_order__c.delete({
                            where:{
                                purchase_id__c: Number(purchase_id)
                            }
                        });
                    }
                  
                    await prisma.purchase__c.delete({
                        where:{
                            id: Number(purchase_id)
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

