// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getProducts(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getProducts();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getProducts() {
            const { user_id } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            try {
                const profiles = await prisma.product__c.findMany({
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
                        account_id: Number(user_id)
                    }
                });
                return res.status(200).send({ status:'success', data: profiles });
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

