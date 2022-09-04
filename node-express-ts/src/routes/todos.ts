import { Router } from "express";
import { createToDo } from "../controllers/controllers";

const router = Router();

router.post("/", createToDo);
router.get("/");
router.patch("/:id");
router.delete("/:id");

export default router;
