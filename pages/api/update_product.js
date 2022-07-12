import Cors from 'cors';
import { prisma } from "./_base";
import middleware from '../../middleware/middleware'
import nextConnect from 'next-connect'
var fs = require('fs');
var mv = require('mv');

const handler = nextConnect()
handler.use(middleware, Cors())

handler.post(async (req, res) => {
 const { product_id, name, category, type, sku, barcode, hsn_code, tax, measure_unit, rate, is_sale, is_purchase, sales_rate, sales_description, purchase_rate, purchase_description, image, description } = req.body;
 if (product_id == "" || product_id == undefined)
    return res.status(200).send({ responseCode: 200,status:"error", message: "Product id is mandatory" })
 if (name == "" || name == undefined)
    return res.status(200).send({ responseCode: 200,status:"error", message: "Product name is mandatory" })
 if (category == "" || category == undefined)
    return res.status(200).send({ responseCode: 200,status:"error", message: "Category is mandatory" })
 if (category == "" || category == undefined)
    return res.status(200).send({ responseCode: 200,status:"error", message: "Category is mandatory" })
 if(type && type !='' && type !=undefined)
 {
    if(type == "SERVICE")
    {
        if (rate == "" || rate == undefined)
            return res.status(200).send({ responseCode: 200,status:"error", message: "Rate is mandatory" })
    }else{
        if(is_sale && is_sale !="" && is_sale != undefined && is_sale == true)
        {
            if (sales_rate == "" || sales_rate == undefined)
                return res.status(200).send({ responseCode: 200,status:"error", message: "Sales Rate is mandatory" })
            if (sales_description == "" || sales_description == undefined)
                return res.status(200).send({ responseCode: 200,status:"error", message: "Sales Description is mandatory" })
        }

        if(is_purchase && is_purchase !="" && is_purchase != undefined && is_purchase == true)
        {
            if (purchase_rate == "" || purchase_rate == undefined)
                return res.status(200).send({ responseCode: 200,status:"error", message: "Purchase Rate is mandatory" })
            if (purchase_description == "" || purchase_description == undefined)
                return res.status(200).send({ responseCode: 200,status:"error", message: "Purchase Description is mandatory" })
        }
    }
  }else{
   return res.status(200).send({ responseCode: 200,status:"error", message: "Type is mandatory" })
  }
    let data = {
        name__c: name[0],
        category__c: category[0],
        sku__c: sku?sku[0]:null,
        barcode__c: barcode?barcode[0]:null,
        hsn_code__c: hsn_code?hsn_code[0]:null,
        tax__c: tax?Number(tax[0]):null,
        unit__c: measure_unit?Number(measure_unit[0]):null,
        mrp__c: rate?Number(rate[0]):null,
        is_sales__c: is_sale?is_sale[0]:false,
        is_purchase__c: is_purchase?is_purchase[0]:false,
        sales_rate__c: sales_rate?Number(sales_rate[0]):null,
        purchase_rate__c: purchase_rate?Number(purchase_rate[0]):null,
        sales_description__c: sales_description?sales_description[0]:null,
        purchase_description__c: purchase_description?purchase_description[0]:null,
        description__c: description?description[0]:null,
        image_url__c: null,
        mesure_unit__c: measure_unit?measure_unit[0]:null,
        type__c: type[0]
    }
    const proImage = req.files.images?req.files.images:'';
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
            data.image_url__c = filename;
        });
    }

    await prisma.product__c.update({
        data: data,
        where:{
            id: Number(product_id)
        }
    });
    return res.status(200).send({ status:"success", message: "Product updated successfully" })
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler