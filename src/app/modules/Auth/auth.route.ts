import express from "express";
import validationRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { authControllers } from "./auth.controller";

const router = express.Router();

router.post(
    '/login',
    validationRequest(AuthValidation.loginValidationSchema),
    authControllers.LoginUser,
)

export const UserRoute = router