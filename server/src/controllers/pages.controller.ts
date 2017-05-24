import { All, Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction} from "express";
import { HomePageService } from '../services/home_page.service';

@Controller("pages")
export class PagesController {
    constructor(private homePageService: HomePageService) {}
    
    @Get("/home")
    async getHomePageData(req: Request, res: Response, next: NextFunction) {
        let data = await this.homePageService.getHomePage();
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

    @All('/*')
    async getAll404(req: Request, res: Response, next: NextFunction) {
        let message = "404 - Page not found";
        console.log(message);
        res.status(404).send(message);
    }
};