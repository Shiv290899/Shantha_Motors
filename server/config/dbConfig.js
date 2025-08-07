const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://knshivakumar139:gYm5U2H2rjjRPZ5x@cluster0.ud5oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbString)

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Succesfull");
});

connection.on("error", () => {
  console.log("Connection Unsuccesfull");
});