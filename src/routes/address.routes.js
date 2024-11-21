import express from "express"
import {authGuard,roleGuard} from "../Guards/index.js"
import {checkaddressdatavalidate} from "../validation/index.js"
import {checkaddressdatamiddleware,updateaddressdatamiddleware} from "../middlewares/index.js"
import {getAlladdresscon,getaddressByIdcon,Createaddresscon,Updateaddresscon,Deleteaddresscon} from "../controllers/index.js"


export const addressrouter=express.Router()

addressrouter.get("/",getAlladdresscon)
addressrouter.get("/:id",getaddressByIdcon)
addressrouter.post("/",authGuard,roleGuard(["admin","superadmin"]),checkaddressdatamiddleware(checkaddressdatavalidate),Createaddresscon)
addressrouter.put("/:id",authGuard,roleGuard(["admin","superadmin"]),updateaddressdatamiddleware(checkaddressdatavalidate),Updateaddresscon)
addressrouter.delete("/:id",authGuard,roleGuard(["admin","superadmin"]),Deleteaddresscon)