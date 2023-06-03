import { Module } from "@nestjs/common";
import {GeneratorController} from "./generator.controller";
import { HttpModule } from "@nestjs/axios";
import { GeneratorService } from "./generator.service";

@Module({
    imports:[HttpModule],
    providers: [GeneratorService],
    controllers: [GeneratorController],
})
export class GeneratorModule{};