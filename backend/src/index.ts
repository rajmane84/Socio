import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error.middleware";

//route imports
import healthcheckRouter from "./routes/healthcheck.route";
import authRouter from "./routes/auth.route";

dotenv.config();

//client import => Don't move this import above the config. If you do so env variables won't get injected in redis
// import "./config/redis";

const app = express();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/auth", authRouter);

//add error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
