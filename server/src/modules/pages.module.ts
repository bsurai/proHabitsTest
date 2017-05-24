import { Module } from '@nestjs/common';
import { PagesController } from "../controllers/pages.controller";
import { HomePageService } from '../services/home_page.service';
import { CommitmentService } from '../services/commitment.service';

@Module({
    controllers: [PagesController],
    components: [HomePageService, CommitmentService],
})
export class PagesModule { }