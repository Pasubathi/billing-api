// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function addDebitNote(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return addDebitNote();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function addDebitNote() {
            const { user_id, debit_id, debit_note_no, purchase_invoice_no, debit_date, vendor_gstin, purchase_date, vendor_name, vendor_address, vendor_mob_no, place_of_supply, sale_preference, tax_type, subtotal, cgst, sgst, total_amount, purchase_note, status, products  } = req.body;
            if (user_id == "" || user_id == undefined)
                return res.status(200).send({ status:'error', message: "User id is mandatory" })
            if (debit_id == "" || debit_id == undefined)
                return res.status(200).send({ status:'error', message: "Debit id is mandatory" })
            if (debit_note_no == "" || debit_note_no == undefined)
                return res.status(200).send({ status:'error', message: "Debit note no is mandatory" })
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
            if (debit_date == "" || debit_date == undefined)
                return res.status(200).send({ status:'error', message: "Date is mandatory" })
            if (purchase_date == "" || purchase_date == undefined)
                return res.status(200).send({ status:'error', message: "Purchase date is mandatory" })
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
            if (total_amount == "" || total_amount == undefined)
                return res.status(200).send({ status:'error', message: "Total amount is mandatory" })
            try {
                const accountDet = await prisma.account__c.findUnique({
                    where: {
                        id: Number(user_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid account details" })
                } else {
                    await prisma.debit_note__c.update({
                        where:{
                            id: Number(debit_id)
                        },
                        data:{
                            account_id: Number(user_id),
                            debit_note_no__c: String(debit_note_no),
                            purchase_invoice_no__c: Number(purchase_invoice_no),
                            vendor_gstin__c: String(vendor_gstin),
                            vendor_name__c: String(vendor_name),
                            vendor_address__c: String(vendor_address),
                            vendor_mob_no__c: Number(vendor_mob_no),
                            purchase_date__c: new Date(purchase_date),
                            date__c: new Date(debit_date),
                            place_of_supply__c: String(place_of_supply),
                            tax_type__c: String(tax_type),
                            subtotal__c: Number(subtotal),
                            cgst__c: Number(cgst),
                            sgst__c: Number(sgst),
                            total_amount__c: Number(total_amount),
                            sale_preference__c: String(sale_preference),
                            purchase_note__c: String(purchase_note),
                            status__c: String(status)
                        }
                    });
                  
                    if(Array.isArray(products))
                    {
                        await prisma.debit_order__c.delete({
                            where:{
                                debit_note_id__c: Number(purchase_id)
                            }
                        });
                        await Promise.all(products.map(async elament =>{
                            await prisma.debit_order__c.create({
                                data:{
                                    debit_note_id__c: Number(debit_id),
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
                    return res.status(200).send({ status:'success',  message: "Debit note modified successfully"})
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

