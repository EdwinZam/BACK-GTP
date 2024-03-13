import OpenAI from "openai";

interface Options {
    threadId: string;
    assistanId?: string;
}

export const createRunUSeCase =async(openai: OpenAI, options: Options)=>{

    const {threadId, assistanId = 'asst_yqsxHCnWgo6Lj7tijUsEksMm'} = options;

    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistanId,
        // instructions; 
    });

    console.log({run})

    return run;

}