// モジュール
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/coffe-labo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDBコネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDBコネクションエラー！！！");
    console.log(err);
  });

//モジュールをexpressにセット
const app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//ルート
app.get("/", (req, res) => {
  res.send("Coffelub");
});

// サーバー立て
app.listen(3000, () => {
  console.log("ポート3000で待受中");
});
