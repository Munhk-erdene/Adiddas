import express from "express";
import {
  getAllItems,
  createItem,
  deleteItem,
  uptadeItem,
} from "../controller/items.js";
const router = express.Router();

router.route("/").get(getAllItems).post(createItem).delete(deleteItem);
router.route("/:id").put(uptadeItem);
export default router;
