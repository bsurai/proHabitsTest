import { Module, Shared } from '@nestjs/common';
import { CommitmentController } from "../controllers/commitment.controller";
import { CommitmentService } from '../services/commitment.service';

@Shared()
@Module({
    controllers: [CommitmentController],
    components: [CommitmentService],
    exports: [CommitmentService],
})
export class CommitmentModule { }