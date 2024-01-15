import express from "express";
import {
  createMall,
  deleteMall,
  getAllMalls,
  getMallById,
  updateMall,
} from "../controllers/mallController";

const router = express.Router();

router.post("/", createMall);
router.get("/", getAllMalls);
router.get("/:id", getMallById);
router.put("/:id", updateMall);
router.delete("/:id", deleteMall);
export default router;
