const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const database = require("../server/models");

//Connect mongoDB

database.mongoose
  .connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  });
var corsOptions = {
  origin: "http://localhost:4000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); //parses data and application type JSON
app.use(bodyParser.urlencoded({ extended: true }));

//Security

//Security parameters
app.use(helmet());
app.use(
  mongoSanitize({
    replaceWith: "-",
  })
);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "http://localhost:3000/"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"],
      upgradeInsecureRequests: [],
      objectSrc: ["'none'"],
    },
  })
);

app.use(helmet.crossOriginEmbedderPolicy());
app.use(
  helmet.referrerPolicy({
    options: "no referrer",
  })
);
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// //prefer https connections

app.use(
  helmet.hsts({
    maxAge: 15552000,
    preload: true,
    includeSubDomains: false,
  })
);
app.get("/", (res, req) => {
  res.send("Ventory backend");
});

require("./routes/warehouse")(app)

//Conection
const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to Port", PORT);
  }
});
