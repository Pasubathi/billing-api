// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function deleteVendor(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return deleteVendor();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function deleteVendor() {
            const { vendor_id } = req.body;
            if (vendor_id == "" || vendor_id == undefined)
                return res.status(200).send({ status:'error', message: "Vendor id is mandatory" })
        
            try {
                const accountDet = await prisma.vendor__c.findUnique({
                    where: {
                        id: Number(vendor_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid vendor id" })
                } else {
                    
                        await prisma.vendor__c.delete({
                            where:{
                                id: Number(vendor_id)
                            }
                        });
                       
                    return res.status(200).send({ status:'success',  message: "Vendor deleted successfully"})
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

