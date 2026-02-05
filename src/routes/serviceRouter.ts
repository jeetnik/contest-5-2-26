import { Router } from "express";
import { createService, setAvailability } from "../controller/serviceController";
import { authenticate } from "../middleware/auth";

const serviceRouter = Router();
serviceRouter.post("/services", authenticate, createService);
serviceRouter.post("/services/:serviceId/availability", authenticate, setAvailability);
export default serviceRouter;
