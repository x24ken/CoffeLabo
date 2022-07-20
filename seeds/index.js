const mongoose = require("mongoose");
const Coffe = require("../models/coffe");

mongoose
  .connect("mongodb://localhost:27017/coffe-labo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodbコネクションok");
  })
  .catch((err) => {
    console.log("Mongodbコネクションエラー!!!");
    console.log(err);
  });

const seedDB = async () => {
  await Coffe.deleteMany({});

  const coffe = new Coffe({
    country: "Japan", //国
    farm: "阿蘇農園", //農園
    elevation: 3000, //標高
  });

  await coffe.save();
};

seedDB().then(() => {
  console.log("無事にseed値読み込めましたよ");
  mongoose.connection.close();
});
