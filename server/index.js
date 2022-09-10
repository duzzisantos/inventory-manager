const express = require("express")
const cors = require("cors")
const app = express()

var corsOptions = ({
    origin: "http://localhost:4000"
});

app.use(cors(corsOptions))
app.use(express.json()) //parses data and application type JSON
app.use(express.urlencoded({unifiedTopology: true, extended: true}))

app.get("/", (res, req) => {
    res.send("Ventory backend")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Connected to Port", PORT)
})

