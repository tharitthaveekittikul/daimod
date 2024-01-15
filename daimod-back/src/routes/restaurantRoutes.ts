import express from "express";
import * as restaurantController from "../controllers/restaurantController";
import {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController";

const router = express.Router();

router.post("/", createRestaurant);

router.get("/", getAllRestaurants);

router.get("/:id", getRestaurantById);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurant);

export default router;
