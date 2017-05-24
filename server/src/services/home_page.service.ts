import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CommitmentService } from './commitment.service';

@Component()
export class HomePageService {
    constructor(private commitmentService: CommitmentService) { }

    async getHomePage() {
        let data = {};
        
        let todaysChallenge = await this.commitmentService.getTodaysChallenge();
        Object.assign(data, todaysChallenge);

        let todaysStatistic = await this.commitmentService.getTodaysStatistic();
        Object.assign(data, todaysStatistic);
        
        return data;
    }
};