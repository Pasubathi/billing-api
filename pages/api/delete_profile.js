// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function deleteprofile(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return deleteprofile();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function deleteprofile() {
            const { profile_id } = req.body;
            if (profile_id == "" || profile_id == undefined)
                return res.status(200).send({ status:'error', message: "Profile id is mandatory" })
        
            try {
                const accountDet = await prisma.profile_c.findUnique({
                    where: {
                        id: Number(profile_id)
                    }
                });
                if (!accountDet) {
                    return res.status(200).send({ status:'error',  message: "Invalid profile id" })
                } else {
                    
                        await prisma.profile_c.delete({
                            where:{
                                id: Number(profile_id)
                            }
                        });
                       
                    return res.status(200).send({ status:'success',  message: "Profile deleted successfully"})
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

