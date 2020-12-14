const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const passport = require("passport")
const passportUtil = require("./utils/passport")
const cors = require("cors")
const path = require("path")

const mongooseConnect = require("./utils/mongooseConnect") //Connecting the mongodDB to the app
const errorController = require("./controller/errorController") //ErrorController

const authRoute = require("./routes/authRoute")

const protectedRoute = require("./routes/protectedRoute")

dotenv.config()

const app = express()

mongooseConnect(process.env.MONGO_URI, process.env.MODE) //Connecting.....

if (process.env.MODE === "DEVELOPMENT") {
	app.use(morgan("dev"))
}

app.use(bodyParser.json()) //body parser for json
app.use(cors()) //CORS for development

passportUtil(passport)
app.use(passport.initialize())

app.use("/api", authRoute)
app.use("/api", protectedRoute)

app.use(errorController)

const PORT = process.env.PORT || 5000 //Port to listen on

const dirname = path.resolve()

if (process.env.NODE_ENV === "PRODUCTION") {
	app.use(express.static(path.join(dirname, "/frontend/build")))
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	})
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`)) //Connecting....
