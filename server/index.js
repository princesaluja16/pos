const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT || 5000;

//database connect
database.connect();

//middlewares
app.use(express.json());

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
