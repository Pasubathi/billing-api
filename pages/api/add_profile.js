// Fake users data
import Cors from 'cors';
import { prisma } from "./_base";
import middleware from '../../middleware/middleware'
import nextConnect from 'next-connect'
import { resolve } from 'path';
import { rejects } from 'assert';
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
            phone__c: String(mobile[0]),
            email__c: String(email[0]),
            gstin_c: gst_no?String(gst_no[0]):null,
            compant_name__c: String(company_name[0]),
            address__c: String(address[0]),
            pincode__c: pincode?String(pincode[0]):null,
            gst_composite__c: gst_composite?String(gst_composite[0]):null,
            business_nature__c: String(nature_business[0]),
            entity_type__c: String(entity_type[0]),
            cin__c: cin_no?String(cin_no[0]):null,
            pan__c: pan_no?String(pan_no[0]):null,
            website__c: website?String(website[0]):null,
            license_title__c: licence_title?String(licence_title[0]):null,
            license_number__c: licence_number?String(licence_number[0]):null
        }
        const proImage = req.files.image?req.files.image:'';
        if(proImage && proImage !==undefined && proImage.length > 0)
        {
           const resData = await uploadProfile(proImage);
           if(resData.status)
           {
                datas.image_url__c = resData.name
           }else{
                return res.status(200).send({ status:"error", message: resData.error });
           }
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


async function uploadProfile(proImage)
{
    return new Promise((resolve, rejects)=>{
        var path = "./uploads";
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
            {
                resolve({status: false, error: err})
            }else{
                resolve({status: true, name: filename})
            }
        });
    })
}

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler

