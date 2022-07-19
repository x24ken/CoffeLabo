const mongoose = require("mongoose");
const { Schema } = mongoose;

const coffeShema = new Schema({
  country: String, //国
  farm: String, //農園
  elevation: Number, //標高
  kind: String, // 品種
  method: String, //精製方法
  sweetnessTaste: Number, //甘み
  sournessTaste: Number, //酸味
  bitterTasete: Number, //苦味
  flavor: String, //フレーバー
  comment: String, // CupComment
  images: String,
});

module.exports = mongoose.model("Campground", campgroundSchema);
