// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function removeVendor(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return removeVendor();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function removeVendor() {
            const { vendor_id } = req.body;
            if (vendor_id == "" || vendor_id == undefined)
                return res.status(200).send({ status:'error',  message: "Vendor id is mandatory" })

            try {
                await prisma.vendor__c.delete({
                    where: {
                        id: Number(vendor_id)
                    }
                });
                return res.status(200).send({ status:'success', message: "Vendor Removed Successfully" })
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

