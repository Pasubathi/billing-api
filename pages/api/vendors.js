// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getVendor(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getVendor();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getVendor() {
            const { user_id } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            try {
                const vendors = await prisma.vendor__c.findMany({
                    where: {
                        account_id: Number(user_id)
                    }
                });
                return res.status(200).send({ status:'success', data: vendors });
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

