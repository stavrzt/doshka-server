const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


// middleware
app.use(cors());
app.use(express.json());


// db sync
const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


// routes
require("./routes/category.routes")(app);

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server starts on 5000');
});