import OpenAI from "openai";
interface Options {
    baseImage: string;
}
export declare const imageVariationUseCase: (openai: OpenAI, options: Options) => Promise<{
    url: string;
    openAiUrl: string;
    revised_prompt: string;
}>;
export {};
