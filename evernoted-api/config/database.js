const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", true);

main()
    .then(() => console.log("Mongo DB connection estabilished!"))
    .catch(err => console.log(err));

async function main() {
    mongoose.connect(process.env.MONGO_DB_URI);
} 