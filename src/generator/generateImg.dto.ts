export class GenerateImgBody {
    height?: number;
    width?: number;
    text_prompts: [
        {
            text: string,
            weight: number,
        }
    ];
    cfg_scale? : number;
    clip_guidance_preset? : string;
    sampler? : string;
    samples? : number;
    seed? : number;
    steps? : number;
    style_preset? : string;
}

export interface IGenerateImgBody {
    height?: number,
    width?: number,
    text_prompts: [
        {
            text: string,
            weight: number,
        }
    ]
    cfg_scale? : number,
    clip_guidance_preset? : string,
    sampler? : string,
    samples? : number,
    seed? : number,
    steps? : number,
    style_preset? : string,
}