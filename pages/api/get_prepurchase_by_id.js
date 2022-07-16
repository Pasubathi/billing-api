// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function getPrePurchaseById(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return getPrePurchaseById();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function getPrePurchaseById() {
            const { pre_purchase_id } = req.body;
            if (pre_purchase_id == "" || pre_purchase_id == undefined)
                return res.status(200).send({ status:'error', message: "Purchase id is mandatory" })
            try {
                const purchase = await prisma.pre_purchase__c.findUnique({
                    select:{
                        id: true,
                        account_id: true,
                        purchase_order_no__c: true,
                        vendor_gstin__c: true,
                        vendor_name__c: true,
                        vendor_address__c: true,
                        vendor_mob_no__c: true,
                        delivery_date__c: true,
                        date__c: true,
                        delivery_address__c: true,
                        delivery_to__c: true,
                        place_of_supply__c: true,
                        tax_type__c: true,
                        subtotal__c: true,
                        cgst__c: true,
                        sgst__c: true,
                        total_amount__c: true,
                        shipment_preference__c: true,
                        shipping_charges__c: true,
                        purchase_note__c: true,
                        status__c: true
                    },
                    where: {
                        id: Number(pre_purchase_id)
                    }
                });

                if (!purchase) {
                    return res.status(200).send({ status:'error',  message: "Invalid Debit" })
                } else {
                   let purchase_data = purchase;
                   const products = await prisma.pre_purchase_order__c.findMany({
                    where: {
                        purchase_order_id__c: Number(purchase.id)
                    }
                    });
                    purchase_data.products = products;
                    return res.status(200).send({ status:'success',  message: "Success", data: purchase_data})
                }
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

