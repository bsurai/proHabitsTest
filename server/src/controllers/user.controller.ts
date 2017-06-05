import { All, Controller, Get, Post, HttpStatus } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import * as IS from "../interfaces";

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Post("user/home")
    async getHomePageData(req: Request, res: Response, next: NextFunction) {
        let userId = 1;
        let data = await this.userService.getHomePage({ userId, commitmentId: req.body.commitmentId });
        res.status(200).json(data);
    }

    @Post("user/commit")
    async getJournalPageData(req: Request, res: Response, next: NextFunction) {
        let params: IS.ParamsCommitment = req.body;
        let data = await this.userService.updateCommitment(params);
        res.status(200).send(data);
    }

    @All("*")
    async getAll404(req: Request, res: Response, next: NextFunction) {
        let message = "404 - Page not found";
        res.status(404).send(message);
    }
}