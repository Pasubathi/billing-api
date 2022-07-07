// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getProfileById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getProfileById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getProfileById() {
            const { profile_id } = req.body;
            if (profile_id == "" || profile_id == undefined)
                return res.status(500).send({ message: "Profile id is mandatory" })
            try {
                const profile = await prisma.profile_c.findUnique({
                    select:{
                        name__c: true,
                        phone__c: true,
                        email__c: true,
                        gstin_c: true,
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
                        id: Number(profile_id)
                    }
                });
                if (!profile) {
                    return res.status(200).send({ status:'error',  message: "Invalid Profile" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: profile})
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

