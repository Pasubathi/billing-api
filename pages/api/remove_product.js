// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function removeProduct(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return removeProduct();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function removeProduct() {
            const { product_id } = req.body;
            if (product_id == "" || product_id == undefined)
                return res.status(200).send({ status:'error',  message: "Product id is mandatory" })

            try {
                await prisma.product__c.delete({
                    where: {
                        id: Number(product_id)
                    }
                });
                return res.status(200).send({ status:'success', message: "Product Removed Successfully" })
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

