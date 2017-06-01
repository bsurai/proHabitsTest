import { All, Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from "express";
import { HomePageService } from '../services/home_page.service';

@Controller("pages")
export class PagesController {
    constructor(private homePageService: HomePageService) { }

    @Post("/home")
    async getHomePageData(req: Request, res: Response, next: NextFunction) {
        console.log("req.body=");
        console.log(req.body);

        let userId = 1;
        let data = await this.homePageService.getHomePage({ userId, commitmentId: req.body.commitmentId });
        res.status(200).json(data);

        let message = "@Get(\"home\")";
        console.log(message);
    }

    @Get('/journal')
    async getJournalPageData(req: Request, res: Response, next: NextFunction) {
        let message = "@Get(\"journal\")";
        console.log(message);
        res.status(200).send(message);
    }

    @All('*')
    async getAll404(req: Request, res: Response, next: NextFunction) {
        let message = "404 - Page not found";
        console.log(message);
        res.status(404).send(message);
    }
};