// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getProfile(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getProfile();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getProfile() {
            const { user_id } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(500).send({ message: "User id is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    select:{
                        name__c: true,
                        phone__c: true,
                        email__c: true,
                        gstin_cc: true,
                        compant_name__c: true,
                        address__c: true,
                        pincode__c: true,
                        gst_composite__c: true,
                        business_nature__c: true,
                        entity_type__c: true,
                        cin__c: true,
                        pan__c: true,
                        website__c: true,
                        license_title__c: true,
                        license_number__c: true,
                    },
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!user) {
                    return res.status(200).send({ status:'error',  message: "Invalid Account" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: user})
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

