// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function addPurchase(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return addPurchase();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function addPurchase() {
            const { user_id,  purchase_invoice_no, invoice_date, vendor_gstin, delivery_date, vendor_name, vendor_address, vendor_mob_no, delivery_address, place_of_supply, delivery_to, shipment_preference, tax_type, subtotal, cgst, sgst, shipping_charges, amount_paid, balance_due, total_amount, purchase_note, status, products  } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            if (purchase_invoice_no == "" || purchase_invoice_no == undefined)
                return res.status(200).send({ status:'error', message: "Purchase invoice no is mandatory" })
            if (vendor_gstin == "" || vendor_gstin == undefined)
                return res.status(200).send({ status:'error', message: "Vendor Gst is mandatory" })
            if (vendor_name == "" || vendor_name == undefined)
                return res.status(200).send({ status:'error', message: "Vendor name is mandatory" })
            if (vendor_address == "" || vendor_address == undefined)
                return res.status(200).send({ status:'error', message: "Vendor address is mandatory" })
            if (vendor_mob_no == "" || vendor_mob_no == undefined)
                return res.status(200).send({ status:'error', message: "Vendor mobile no is mandatory" })
            if (delivery_date == "" || delivery_date == undefined)
                return res.status(200).send({ status:'error', message: "Delivery date is mandatory" })
            if (delivery_address == "" || delivery_address == undefined)
                return res.status(200).send({ status:'error', message: "Delivery address is mandatory" })
            if (delivery_to == "" || delivery_to == undefined)
                return res.status(200).send({ status:'error', message: "Delivery to is mandatory" })
            if (place_of_supply == "" || place_of_supply == undefined)
                return res.status(200).send({ status:'error', message: "Place of supply is mandatory" })
            if (tax_type == "" || tax_type == undefined)
                return res.status(200).send({ status:'error', message: "Tax type is mandatory" })
            if (subtotal == "" || subtotal == undefined)
                return res.status(200).send({ status:'error', message: "Sub total is mandatory" })
            if (cgst == "" || cgst == undefined)
                return res.status(200).send({ status:'error', message: "CGST is mandatory" })
            if (sgst == "" || sgst == undefined)
                return res.status(200).send({ status:'error', message: "SGST total is mandatory" })
            if (balance_due == "" || balance_due == undefined)
                return res.status(200).send({ status:'error', message: "Balance due is mandatory" })
            if (invoice_date == "" || invoice_date == undefined)
                return res.status(200).send({ status:'error', message: "Invoice Date is mandatory" })
            if (total_amount == "" || total_amount == undefined)
                return res.status(200).send({ status:'error', message: "Total amount is mandatory" })
            if (amount_paid == "" || amount_paid == undefined)
                return res.status(200).send({ status:'error', message: "Amount Paid is mandatory" })
            try {
                const accountDet = await prisma.account__c.findUnique({
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid account details" })
                } else {
                    const purchase_id = await prisma.purchase__c.create({
                        data:{
                            account_id: Number(user_id),
                            purchase_invoice_no__c: Number(purchase_invoice_no),
                            vendor_gstin__c: String(vendor_gstin),
                            vendor_name__c: String(vendor_name),
                            vendor_address__c: String(vendor_address),
                            vendor_mob_no__c: Number(vendor_mob_no),
                            delivery_date__c: new Date(delivery_date),
                            date__c: new Date(invoice_date),
                            delivery_address__c: String(delivery_address),
                            delivery_to__c: String(delivery_to),
                            place_of_supply__c: String(place_of_supply),
                            tax_type__c: String(tax_type),
                            subtotal__c: Number(subtotal),
                            cgst__c: Number(cgst),
                            sgst__c: Number(sgst),
                            amount_paid__c: Number(amount_paid),
                            total_amount__c: Number(total_amount),
                            balance_due__c: Number(balance_due), 
                            shipment_preference__c: String(shipment_preference),
                            shipping_charges__c: Number(shipping_charges),
                            purchase_note__c: String(purchase_note),
                            status__c: String(status)
                        }
                    });

                    if(Array.isArray(products))
                    {
                        await Promise.all(products.map(async elament =>{
                            await prisma.purchase_order__c.create({
                                data:{
                                    purchase_id__c: Number(purchase_id),
                                    product_name__c: String(elament.product_name),
                                    description__c: String(elament.description),
                                    hsn__c: String(elament.hsn),
                                    rate__c: Number(elament.rate),
                                    quantity__c: Number(elament.quantity),
                                    tax_rate__c: Number(elament.tax_rate),
                                    discount__c: String(elament.discount),
                                    amount__c: Number(elament.amount),
                                }
                            });
                        }

                            
                        ))
                    }
                    return res.status(200).send({ status:'success',  message: "Purchase added successfully"})
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

