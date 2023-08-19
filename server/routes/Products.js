const express = require("express")
const router = express.Router()



const {addProduct , getProduct} = require('../controllers/Product');

router.post('/addProduct' , addProduct);

router.get('/getProduct' , getProduct);



// Export the router for use in the main application
module.exports = router