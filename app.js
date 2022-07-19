// モジュール
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//モジュールをexpressにセット
const app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Coffelub");
});

app.listen(3000, () => {
  console.log("ポート3000で待受中");
});
