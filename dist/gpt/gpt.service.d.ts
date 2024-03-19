/// <reference types="multer" />
import { ImageGenerationDto, ImageVariationDto, OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
import OpenAI from 'openai';
export declare class GptService {
    private openai;
    orthographyCheck(orthographyDto: OrthographyDto): Promise<any>;
    prosConsDiscusser({ prompt }: ProsConsDiscusserDto): Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
    prosConsDiscusserStream({ prompt }: ProsConsDiscusserDto): Promise<import("openai/streaming").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
    translate({ prompt, lang }: TranslateDto): Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
    textToAudio({ prompt, voice }: TextToAudioDto): Promise<string>;
    textToAudioGetter(fileId: string): Promise<string>;
    audioToText(audioFile: Express.Multer.File, prompt?: string): Promise<OpenAI.Audio.Transcriptions.Transcription>;
    imageGeneration(imageGenerationDto: ImageGenerationDto): Promise<{
        url: string;
        openAiUrl: string;
        revised_prompt: string;
    }>;
    getGeneratedImage(fileName: string): string;
    generateImageVariation({ baseImage }: ImageVariationDto): Promise<{
        url: string;
        openAiUrl: string;
        revised_prompt: string;
    }>;
}
