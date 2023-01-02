const mongoose = require("mongoose");

const connectToMongo = () => {
    const mongoURL =
        "mongodb+srv://Smit:smit0608@cluster0.vorxo.mongodb.net/moneytracker?retryWrites=true&w=majority";
    mongoose.connect(mongoURL, () => {
        console.log("connected to mongo");
    });
};

module.exports = { connectToMongo };
