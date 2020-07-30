const path = require('path')
const express = require('express');
const rooDir = require('../util/path')
const router =express.Router();
const adminData = require('./admin')

router.get('/',(req,res, next) => {
	const products = adminData.products
	res.render('shop',{prods : products, pageTitle:'shop', path:'/'});
});


module.exports=router;