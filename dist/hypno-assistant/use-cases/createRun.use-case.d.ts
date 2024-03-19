import OpenAI from "openai";
interface Options {
    threadId: string;
    assistanId?: string;
}
export declare const createRunUSeCase: (openai: OpenAI, options: Options) => Promise<OpenAI.Beta.Threads.Runs.Run>;
export {};
