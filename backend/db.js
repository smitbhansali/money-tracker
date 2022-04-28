const mongoose = require("mongoose");

const connectToMongo = () => {
    const mongoURL =
        "mongodb://localhost:27017/moneytracker?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    mongoose.connect(mongoURL, () => {
        console.log("connected to mongo");
    });
};

module.exports = { connectToMongo };
