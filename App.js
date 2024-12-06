// const express = require('express')
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import session from "express-session";

import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import EnrollmentsRoutes from "./Kanbas/Enrollments/routes.js";
import QuizzesRoutes from "./Kanbas/Quizzes/routes.js";
import QuestionsRoutes from "./Kanbas/Questions/routes.js";
import AttemptsRoutes from "./Kanbas/Attempts/routes.js";
import PreviewsRoutes from "./Kanbas/Previews/routes.js";

console.log("Environment Variables:", process.env.MONGO_CONNECTION_STRING);

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

// const corsOptions = {
//   origin: "https://a5--mellow-axolotl-011755.netlify.app", // Your frontend URL
//   credentials: true,
// };

// app.use(cors(corsOptions));

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

///////////////////////////////////////////////////

Lab5(app);
HelloRoutes(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentsRoutes(app);
QuizzesRoutes(app);
QuestionsRoutes(app);
AttemptsRoutes(app);
PreviewsRoutes(app);

app.listen(process.env.PORT || 4000);
