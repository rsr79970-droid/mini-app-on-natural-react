import { Router } from "express";
import userController from "../controllers/user.controller.js";

export const userRoutes = () => {
  const router = Router();

  router.get("/", userController.findAll);
  router.get("/:id", userController.findById);
  router.post("/", userController.create);
  router.patch("/:id", userController.update);
  router.delete("/:id", userController.delete);

  return router
};
