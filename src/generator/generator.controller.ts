import { Controller, Get, Post, Body, HttpStatus, Param, Res } from "@nestjs/common";
import { GeneratorService } from './generator.service';
import { GenerateImgBody } from "./generateImg.dto";

@Controller('image')
export class GeneratorController{
    constructor(private generatorService: GeneratorService){}

    @Get("get")
    create() : string {
        return "Generate image"
    }

    @Get("info")
    info(@Res() res: any){
        return res.status(HttpStatus.OK).json([]);
    }

    @Get("env")
    env() : string {
        return process.env.MY_NAME;
    }

    @Get("account")
    account() {
        return this.generatorService.account();
    }

    @Post("generate")
    generate(@Body() generateImgBody : GenerateImgBody) {
        return this.generatorService.generate(generateImgBody);
    }
}