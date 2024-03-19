"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRunUSeCase = void 0;
const createRunUSeCase = async (openai, options) => {
    const { threadId, assistanId = 'asst_yqsxHCnWgo6Lj7tijUsEksMm' } = options;
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistanId,
    });
    console.log({ run });
    return run;
};
exports.createRunUSeCase = createRunUSeCase;
//# sourceMappingURL=createRun.use-case.js.map