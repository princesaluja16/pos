const express = require("express")
const router = express.Router()



const {addProduct} = require('../controllers/Product');

router.post('/addProduct' , addProduct);

// Export the router for use in the main application
module.exports = router