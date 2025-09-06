import { Router } from "express";
import { CodeController } from "../controllers/CodeController";
const router = Router();
router.post("/", CodeController.saveId);
router.get("/:id", CodeController.getCodeById);

export default router;
