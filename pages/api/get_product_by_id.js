// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getProductById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getProductById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getProductById() {
            const { product_id } = req.body;
            if (product_id == "" || product_id == undefined)
                return res.status(500).send({ message: "Product id is mandatory" })
            try {
                const product = await prisma.product__c.findUnique({
                    select:{
                        id: true,
                        name__c: true,
                        category__c: true,
                        sku__c: true,
                        barcode__c: true,
                        hsn_code__c: true,
                        tax__c : true,
                        unit__c : true,
                        mrp__c : true,
                        is_sales__c : true,
                        is_purchase__c : true,
                        sales_rate__c : true,
                        purchase_rate__c : true,
                        sales_description__c: true,
                        purchase_description__c: true,
                        description__c: true,
                        image_url__c: true,
                        mesure_unit__c: true,
                        created_date__c: true,
                        type__c: true,
                    },
                    where: {
                        id: Number(product_id)
                    }
                });
                if (!profile) {
                    return res.status(200).send({ status:'error',  message: "Invalid Product" })
                } else {
                        return res.status(200).send({ status:'success',  message: "Success", data: product})
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

