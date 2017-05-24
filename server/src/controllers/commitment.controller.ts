import { Controller, All, Get, Delete, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction} from "express";
import { CommitmentService } from '../services/commitment.service';

@Controller("commitment")
export class CommitmentController {
    constructor(private commitmentService: CommitmentService) {}

    @Get("/todays")
    async getTodaysCommitment(req: Request, res: Response, next: NextFunction) { 
        let data = await this.commitmentService.getTodaysChallenge();
        res.status(200).send(data);
        
        let message = "@Get(\"todays\")";
        console.log(message);
    }

    @Get("/statistic")
    async getTodaysStatistic(req: Request, res: Response, next: NextFunction) {
        let data = await this.commitmentService.getTodaysStatistic();
        res.status(200).send(data);
        
        let message = "@Get(\"statistic\")";
        console.log(message);
     }

    @Post('/create')
    async createNewCommitment(req: Request, res: Response, next: NextFunction) { 
        let message = "@Post(\"create\")";
        console.log(message);
        res.status(200).send(message);
    }

    @Get('/read/:id')
    async readCommitmentById(req: Request, res: Response, next: NextFunction) { 
        let message = "@Get(\"/read/:id\")";
        console.log(message);
        res.status(200).send(message);
    }

    @Post('/update/:id')
    async updateNewCommitmentById(req: Request, res: Response, next: NextFunction) {
        let message = "@Post(\"update/:id\")";
        console.log(message);
        res.status(200).send(message);
     }

    @Delete('/delete/:id')
    async deleteCommitmentById(req: Request, res: Response, next: NextFunction) { 
        let message = "@Delete(\"delete/:id\")";
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