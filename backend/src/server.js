import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";

const app = express();

app.use(express.json());

app.use(clerkMiddleware); //req.auth will be available  on req object

app.use("/api/inngest", serve({ client: inngest, functions }));

const PORT = ENV.PORT;

app.get("/", (req, res) => {
  res.send("Hello world 123");
});

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log("Server has started on port:", PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error)
    process.exit(1)
  }
};

startServer();

export default app
