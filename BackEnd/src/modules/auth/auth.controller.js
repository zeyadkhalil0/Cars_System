import {Router} from "express"
import * as authServices from "./auth.service.js"
const router = Router()


router.post("/register" ,authServices.register )
router.post("/login" , authServices.Login)
export default router 