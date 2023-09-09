import { Router } from "express";
import userController from "../controller/user.controller";
import userMiddlewares from "../middlewares/user.middlewares";

const router = Router();

router.get("", userController.getAll);
router.get("/:id", userController.getById);
router.post("", userMiddlewares.add, userController.add);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
