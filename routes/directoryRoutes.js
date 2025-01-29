import express from "express";
import {
  createItem,
  getDirectories,
  renameItem,
  deleteItem,
} from "../controllers/directoryController.js";

const router = express.Router();

router.post("/create", createItem);
router.get("/", getDirectories);
router.put("/rename/:id", renameItem);
router.delete("/delete/:id", deleteItem);

export default router;
