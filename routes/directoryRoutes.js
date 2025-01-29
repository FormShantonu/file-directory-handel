import express from "express";
import { body } from 'express-validator';
import {
  createItem,
  getDirectories,
  renameItem,
  deleteItem,
} from "../controllers/directoryController.js";

const router = express.Router();

router.post('/create', [
    body('name').notEmpty().withMessage('Name is required'),
    body('type').isIn(['file', 'folder']).withMessage('Type must be either file or folder')
], createItem);
router.get("/", getDirectories);
router.put("/rename/:id", renameItem);
router.delete("/delete/:id", deleteItem);

export default router;
