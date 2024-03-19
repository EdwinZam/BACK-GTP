/// <reference types="multer" />
import { GptService } from './gpt.service';
import { ImageGenerationDto, ImageVariationDto, OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
import type { Response } from 'express';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    ortographyCheck(orthographyDto: OrthographyDto): Promise<any>;
    prosConsDiscusser(prosConsDiscusserDto: ProsConsDiscusserDto): Promise<import("openai/resources").ChatCompletionMessage>;
    prosConsDiscusserStream(prosConsDiscusserDto: ProsConsDiscusserDto, res: Response): Promise<void>;
    translate(translateDto: TranslateDto): Promise<import("openai/resources").ChatCompletionMessage>;
    textToAudio(textToAudioDto: TextToAudioDto, res: Response): Promise<void>;
    textToAudioGetter(res: Response, fileId: string): Promise<void>;
    audioToText(file: Express.Multer.File): Promise<import("openai/resources/audio/transcriptions").Transcription>;
    imageGeneration(imageGenerationDto: ImageGenerationDto): Promise<{
        url: string;
        openAiUrl: string;
        revised_prompt: string;
    }>;
    getGeneratedImage(res: Response, filename: string): Promise<void>;
    imageVariation(imageVariationDto: ImageVariationDto): Promise<{
        url: string;
        openAiUrl: string;
        revised_prompt: string;
    }>;
}
