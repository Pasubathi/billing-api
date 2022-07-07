// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function updateCustomer(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return updateCustomer();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function updateCustomer() {
            const { customer_id, gst_no, name, email, address, mobile, entity_type, licence_title, licence_number  } = req.body;
            if (customer_id == "" || customer_id == undefined)
                return res.status(500).send({ message: "Customer id is mandatory" })
            if (name == "" || name == undefined)
                return res.status(500).send({ message: "Name is mandatory" })
            try {
                const customer = await prisma.customer__c.findUnique({
                    where: {
                        id: Number(customer_id)
                    }
                });
                if (!customer) {
                    return res.status(200).send({ status:'error',  message: "Invalid customer details" })
                } else {
                    await prisma.customer__c.update({
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
                            id: Number(customer_id)
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

