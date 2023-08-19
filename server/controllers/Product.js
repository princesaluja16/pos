const Product = require('../models/Product');

// Controller to handle adding products
exports.addProduct = async (req, res) => {
    try {
      
      const { name, category,price, quantity} = req.body;
  

      // Save the product to the database
      const savedProduct = await Product.create({name,category,price,quantity})
      res.status(201).json({
        success: true,
        data: savedProduct
      }
    );
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'An error occurred while adding the product.' });
    }
  };


  exports.getProduct = async(req,res)=>{
    try{

        const products = await Product.find({}); // Fetch all products from the database

    res.status(200).json({
        success : true,
        data : products
    });

    }
    catch(error) {

        res.status(500).json({
            success : false,
            message : "Not able to fetch the products"
        });
        
  }
}
