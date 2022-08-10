// Fake users data
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import { prisma } from "./_base";
const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
)
export default async function removeProfile(req, res) {
    await cors(req, res);
    try {
        switch (req.method) {
            case 'POST':
                return removeProfile();
            default:
                return res.status(500).end(`Method ${req.method} Not Allowed`)
        }
        async function removeProfile() {
            const { profile_id } = req.body;
            if (profile_id == "" || profile_id == undefined)
                return res.status(200).send({ status:'error',  message: "Profile id is mandatory" })

            try {
                await prisma.profile_c.delete({
                    where: {
                        id: Number(profile_id)
                    }
                });
                return res.status(200).send({ status:'success', message: "Profile Removed Successfully" })
            } catch (e) {
                res.status(200).send({ status:'error', message: e.message ? e.message : e });
                return;
            }// update otp process
        }
    } catch (error) {
        res.status(200).send({ status:'error', message: error.message ? error.message : error })
    } // get mobile number process

}

