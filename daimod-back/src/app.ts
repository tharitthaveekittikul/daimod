import express from "express";
import mallRoutes from "./routes/mallRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";

const app = express();

app.use(express.json());

app.use("/malls", mallRoutes);
app.use("/restaurants", restaurantRoutes);

export default app;
