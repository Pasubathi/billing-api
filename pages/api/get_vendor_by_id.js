// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getVendorById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getVendorById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getVendorById() {
            const { vendor_id } = req.body;
            if (vendor_id == "" || vendor_id == undefined)
                return res.status(500).send({ message: "Vendor id is mandatory" })
            try {
                const vendor = await prisma.vendor__c.findUnique({
                    select:{
                        name__c: true,
                        phone__c: true,
                        email__c: true,
                        gstin__c: true,
                        address__c: true,
                        entity_type__c: true,
                        license_title__c: true,
                        license_number__c: true,
                    },
                    where: {
                        id: Number(vendor_id)
                    }
                });
                if (!vendor) {
                    return res.status(200).send({ status:'error',  message: "Invalid Vendor" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: vendor})
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

