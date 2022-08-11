import Cors from 'cors';
import { prisma } from "./_base";
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';
var fs = require('fs');
var mv = require('mv');

const handler = nextConnect()
handler.use(middleware, Cors())

handler.post(async (req, res) => {
    const { profile_id, gst_no, email, company_name, address, pincode, gst_composite, mobile, nature_business, entity_type, cin_no, pan_no, website, licence_title, licence_number  } = req.body;
    if (profile_id == "" || profile_id == undefined)
        return res.status(200).send({ status:'error', message: "Profile id is mandatory" })
    if (company_name == "" || company_name == undefined)
        return res.status(200).send({ status:'error', message: "Company name is mandatory" })
    if (address == "" || address == undefined)
        return res.status(200).send({ status:'error', message: "Address is mandatory" })
    if (email == "" || email == undefined)
        return res.status(200).send({ status:'error', message: "Email is mandatory" })
    if (mobile == "" || mobile == undefined)
        return res.status(200).send({ status:'error', message: "Mobile is mandatory" })
    if (nature_business == "" || nature_business == undefined)
        return res.status(200).send({ status:'error', message: "Nature of Business is mandatory" })
    if (entity_type == "" || entity_type == undefined)
        return res.status(200).send({ status:'error', message: "Entity type is mandatory" })

        try {
            const profile = await prisma.profile_c.findUnique({
                where: {
                    id: Number(profile_id)
                }
            });
            if (!profile) {
                return res.status(200).send({ status:'error',  message: "Invalid profile" })
            } else {
                var datas = {
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
                await prisma.profile_c.update({
                    data: datas,
                    where: {
                        id: Number(profile_id)
                    }
                });
                    return res.status(200).send({ status:'success',  message: "Updated Successfully"})
            }
        } catch (e) {
            res.status(200).send({ status:'error', message: e.message ? e.message : e });
            return;
        }// update otp process

});

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