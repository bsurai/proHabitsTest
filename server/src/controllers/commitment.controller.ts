import { Controller, All, Get, Delete, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from "express";
import { CommitmentService } from '../services/commitment.service';

@Controller("commitment")
export class CommitmentController {
    constructor(private commitmentService: CommitmentService) { }

    @Post("/todays")
    async getTodaysCommitment(req: Request, res: Response, next: NextFunction) {
        let params: { userId: number; commitmentId: number } = req.body; 
        params.userId = 1;
        let data = await this.commitmentService.getTodaysChallenge(params);
        res.status(200).send(data);

        let message = "@Get(\"todays\")";
        console.log(message);
    };

    /* @Post("/statistic")
    async getTodaysStatistic(req: Request, res: Response, next: NextFunction) {
        let data = await this.commitmentService.getTodaysStatistic();
        res.status(200).send(data);

        let message = "@Get(\"statistic\")";
        console.log(message);
    }; */


    @Post('/update')
    async updateNewCommitmentById(req: Request, res: Response, next: NextFunction) {
        console.log("req.body=");
        console.log(req.body);

        let params: { userId: number; commitmentId: number, status: number } = req.body;
        let data = await this.commitmentService.updateCommitment(params);
        res.status(200).send(data);

        let message = "@Post(\"update\")";
        console.log(message);
    };

    @All('/*')
    async getAll404(req: Request, res: Response, next: NextFunction) {
        let message = "404 - Page not found";
        console.log(message);
        res.status(404).send(message);
    };
};