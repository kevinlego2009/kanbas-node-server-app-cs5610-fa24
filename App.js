// const express = require('express')
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

Lab5(app);
HelloRoutes(app);

app.listen(process.env.PORT || 4000);
