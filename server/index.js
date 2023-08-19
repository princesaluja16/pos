const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
const userRoutes = require("./routes/User");

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cookieParser());

//database connect
database.connect();



app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

//routes
app.use("/api/v1/", userRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
