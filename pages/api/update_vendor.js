// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function updateVendor(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return updateVendor();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function updateVendor() {
            const { vendor_id, gst_no, name, email, address, mobile, entity_type, licence_title, licence_number  } = req.body;
            if (vendor_id == "" || vendor_id == undefined)
                return res.status(500).send({ message: "Vendor id is mandatory" })
            if (name == "" || name == undefined)
                return res.status(500).send({ message: "Vendor Name is mandatory" })
            try {
                const vendor = await prisma.vendor__c.findUnique({
                    where: {
                        id: Number(vendor_id)
                    }
                });
                if (!vendor) {
                    return res.status(200).send({ status:'error',  message: "Invalid vendor details" })
                } else {
                    await prisma.vendor__c.update({
                        data:{
                            name__c: name,
                            phone__c: mobile?mobile:null,
                            email__c: email?email:null,
                            gstin__c: gst_no?gst_no:null,
                            address__c: address?address:null,
                            entity_type__c: entity_type?entity_type:null,
                            license_title__c: licence_title?licence_title:null,
                            license_number__c: licence_number?licence_number:null
                        },
                        where: {
                            id: Number(vendor_id)
                        }
                    });
                        return res.status(200).send({ status:'success',  message: "Updated Successfully"})
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

