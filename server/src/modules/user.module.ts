import { Module } from "@nestjs/common";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

@Module({
    controllers: [UserController],
    components: [UserService],
})
export class UserModule { }