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
            const { profile_id, gst_no, email, company_name, address, pincode, gst_composite, mobile, nature_business, entity_type, cin_no, pan_no, website, licence_title, licence_number  } = req.body;
            if (profile_id == "" || profile_id == undefined)
                return res.status(500).send({ message: "Profile id is mandatory" })
            if (company_name == "" || company_name == undefined)
                return res.status(500).send({ message: "Company name is mandatory" })
            if (address == "" || address == undefined)
                return res.status(500).send({ message: "Address is mandatory" })
            if (email == "" || email == undefined)
                return res.status(500).send({ message: "Email is mandatory" })
            if (mobile == "" || mobile == undefined)
                return res.status(500).send({ message: "Mobile is mandatory" })
            if (nature_business == "" || nature_business == undefined)
                return res.status(500).send({ message: "Nature of Business is mandatory" })
            if (entity_type == "" || entity_type == undefined)
                return res.status(500).send({ message: "Entity type is mandatory" })
            try {
                const profile = await prisma.profile_c.findUnique({
                    where: {
                        id: Number(profile_id)
                    }
                });
                if (!profile) {
                    return res.status(200).send({ status:'error',  message: "Invalid account" })
                } else {
                    await prisma.profile_c.update({
                        data:{
                            phone__c: mobile,
                            email__c: email,
                            gstin_c: gst_no?gst_no:null,
                            compant_name__c: company_name,
                            address__c: address,
                            pincode__c: pincode?pincode:null,
                            gst_composite__c: gst_composite?gst_composite:null,
                            business_nature__c: nature_business,
                            entity_type__c: entity_type,
                            cin__c: cin_no?cin_no:null,
                            pan__c: pan_no?pan_no:null,
                            website__c: website?website:null,
                            license_title__c: licence_title?licence_title:null,
                            license_number__c: licence_number?licence_number:null
                        },
                        where: {
                            id: Number(profile_id)
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

