import { All, Controller, Get, Post, HttpStatus } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import * as IS from "../interfaces";

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Post("user/home")
    async getHomePageData(req: Request, res: Response, next: NextFunction) {
        let data = await this.userService.getHomePage(req.body);
        res.status(200).json(data);
    }

    @Post("user/commit")
    async getJournalPageData(req: Request, res: Response, next: NextFunction) {
        let data = await this.userService.updateCommitment(req.body);
        res.status(200).send(data);
    }

    @All("*")
    async getAll404(req: Request, res: Response, next: NextFunction) {
        let message = "404 - Page not found";
        res.status(404).send(message);
    }
}