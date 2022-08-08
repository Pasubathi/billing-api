// Fake users data
import Cors from 'cors';
import { prisma } from "./_base";
import middleware from '../../middleware/middleware'
import nextConnect from 'next-connect'
var fs = require('fs');
var mv = require('mv');

const handler = nextConnect()
handler.use(middleware, Cors())

handler.post(async (req, res) => {
    const { user_id, gst_no, email, company_name, address, pincode, gst_composite, mobile, nature_business, entity_type, cin_no, pan_no, website, licence_title, licence_number  } = req.body;
    if (user_id == "" || user_id == undefined)
        return res.status(200).send({ status:"error", message: "User id is mandatory" })
    if (company_name == "" || company_name == undefined)
        return res.status(200).send({ status:"error", message: "Company name is mandatory" })
    if (address == "" || address == undefined)
        return res.status(200).send({ status:"error", message: "Address is mandatory" })
    if (email == "" || email == undefined)
        return res.status(200).send({ status:"error", message: "Email is mandatory" })
    if (mobile == "" || mobile == undefined)
        return res.status(200).send({ status:"error", message: "Mobile is mandatory" })
    if (nature_business == "" || nature_business == undefined)
        return res.status(200).send({ status:"error", message: "Nature of Business is mandatory" })
    if (entity_type == "" || entity_type == undefined)
        return res.status(200).send({ status:"error", message: "Entity type is mandatory" })
    try {
        var datas = {
            account_id: Number(user_id),
            phone__c: String(mobile),
            email__c: String(email),
            gstin_c: gst_no?String(gst_no):null,
            compant_name__c: String(company_name),
            address__c: String(address),
            pincode__c: pincode?String(pincode):null,
            gst_composite__c: gst_composite?String(gst_composite):null,
            business_nature__c: String(nature_business),
            entity_type__c: String(entity_type),
            cin__c: cin_no?String(cin_no):null,
            pan__c: pan_no?String(pan_no):null,
            website__c: website?String(website):null,
            license_title__c: licence_title?String(licence_title):null,
            license_number__c: licence_number?String(licence_number):null
        }
        const proImage = req.files.image?req.files.image:'';
        var path = "./uploads";
        if(proImage && proImage !==undefined && proImage.length > 0)
    {
        if (!fs.existsSync(path)){
            fs.mkdirSync(path);
        }
        const d = new Date();
        const time = d.getTime();
        const uploadFile = proImage[0];
        const oldpath = uploadFile.path;
        const imagename = uploadFile.originalFilename;
        const extension = imagename.split('.').pop();
        const filename = time+'.'+extension;
        const newpath = path+'/'+filename;
            mv(oldpath, newpath, function (err) {
                if (err) 
                return res.status(200).send({ status:"error", message: err });
                datas.image_url__c = filename;
            });
        }
        await prisma.profile_c.create({
            data: datas
        });
        return res.status(200).send({ status:'success',  message: "Profile Added Successfully"})
    } catch (e) {
        res.status(200).send({ status:"error", message: e.message ? e.message : e });
        return;
    }// update otp process
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler

