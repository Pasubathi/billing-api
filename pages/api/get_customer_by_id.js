// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getCustomerById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getCustomerById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getCustomerById() {
            const { customer_id } = req.body;
            if (customer_id == "" || customer_id == undefined)
                return res.status(500).send({ message: "Customer id is mandatory" })
            try {
                const customer = await prisma.customer__c.findUnique({
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
                        id: Number(customer_id)
                    }
                });
                if (!customer) {
                    return res.status(200).send({ status:'error',  message: "Invalid Customer" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: customer})
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

