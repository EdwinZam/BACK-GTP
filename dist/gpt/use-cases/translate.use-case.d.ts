import OpenAI from "openai";
interface Options {
    prompt: string;
    lang: string;
}
export declare const translateUseCase: (openai: OpenAI, options: Options) => Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
export {};
