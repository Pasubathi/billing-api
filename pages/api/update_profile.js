// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function updateProfile(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return updateProfile();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function updateProfile() {
            const { user_id, gst_no, company_name, address, pincode, gst_composite, mobile, nature_business, entity_type, cin_no, pan_no, website, licence_title, licence_number  } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(500).send({ message: "Email is mandatory" })
            if (mobile == "" || mobile == undefined)
                return res.status(500).send({ message: "Mobile is mandatory" })
            try {
                const user = await prisma.account__c.findUnique({
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!user) {
                    return res.status(200).send({ status:'error',  message: "Invalid account" })
                } else {
                    await prisma.account__c.update({
                        data:{
                            phone__c: mobile,
                            gstin_cc: gst_no?gst_no:null,
                            compant_name__c: company_name?company_name:null,
                            address__c: address?address:null,
                            pincode__c: pincode?pincode:null,
                            gst_composite__c: gst_composite?gst_composite:null,
                            business_nature__c: nature_business?nature_business:null,
                            entity_type__c: entity_type?entity_type:null,
                            cin__c: cin_no?cin_no:null,
                            pan__c: pan_no?pan_no:null,
                            website__c: website?website:null,
                            license_title__c: licence_title?licence_title:null,
                            license_number__c: licence_number?licence_number:null
                        },
                        where: {
                            id: Number(user_id)
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

