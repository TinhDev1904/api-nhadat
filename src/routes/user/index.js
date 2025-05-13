"use strict";
import { Router } from "express";
import {SuccessResponse} from "../../core/success.response.js";

const userRouter = Router();
userRouter.get("/", (req, res) => {
    new SuccessResponse({
        message: "Get all users",
        metadata: {
            users: [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Jane Doe" }
            ]
        }
    }).send(res);
});

export default userRouter;