// Modules
import { Hono } from "hono";
import { logger } from "hono/logger";
// Routes
import { expensesRoute } from "./routes/expenses";

// "Main app"
const app = new Hono();

app.use("*", logger()); // for debug

app.get("/test", (c) => {
  return c.json({ message: "test" });
});

app.route("/api/expenses", expensesRoute);

export default app;
