const express= require("express");
const router =express.Router();
const pagesControlller=require("../controller/pages.controller.js")

router.get('/',pagesControlller.home)

router.get('/Contact', pagesControlller.contact);

router.get("/About", pagesControlller.about);
router.get("/Samplepost", pagesControlller.samplepost);








module.exports= router;