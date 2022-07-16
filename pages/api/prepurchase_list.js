// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getPrePurchases(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getPrePurchases();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getPrePurchases() {
            const { user_id } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            try {
                const purchases = await prisma.pre_purchase__c.findMany({
                    where: {
                        account_id: Number(user_id)
                    }
                });
                return res.status(200).send({ status:'success', data: purchases });
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

