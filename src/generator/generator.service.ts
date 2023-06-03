import { Injectable }  from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IGenerateImgBody, GenerateImgBody } from './generateImg.dto';
import { Observable, firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

const API_HOST = process.env.API_HOST ?? 'https://api.stability.ai';
const GET_ACCOUNT_URL = `${API_HOST}/v1/user/account`

@Injectable()
export class GeneratorService {
    constructor(private readonly httpService: HttpService){}

    async generate(generateImgBody : GenerateImgBody){
        console.log(generateImgBody);
    }

    async account(){
        console.log(GET_ACCOUNT_URL);
        console.log(process.env.AI_API_KEY);
        const {data} = await firstValueFrom( 
            this.httpService.get(GET_ACCOUNT_URL, {
                headers: {
                    "Authorization" : `Bearer ${process.env.AI_API_KEY}`
                }
            }),
        )
        
        return data;
    }
}