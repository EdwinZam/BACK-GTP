"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prosConsDiscusserUseCase = void 0;
const prosConsDiscusserUseCase = async (openai, options) => {
    const { prompt } = options;
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `
                Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
                la respuesta debe de ser en formato markdown,
                los pros y contras deben de estar en una lista,                
                `
            },
            {
                role: 'user',
                content: prompt,
            }
        ],
        model: "gpt-4",
        temperature: 0.8,
        max_tokens: 500,
        top_p: 1,
    });
    console.log(response.choices[0].message);
    return response.choices[0].message;
};
exports.prosConsDiscusserUseCase = prosConsDiscusserUseCase;
//# sourceMappingURL=prosConsDiscusser.use-case.js.map