"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateUseCase = void 0;
const translateUseCase = async (openai, options) => {
    const { prompt, lang } = options;
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `Traduce el siguiente texto al idioma ${lang}:${prompt}`
            },
        ],
        model: "gpt-3.5-turbo-1106",
        temperature: 0.2,
    });
    return response.choices[0].message;
};
exports.translateUseCase = translateUseCase;
//# sourceMappingURL=translate.use-case.js.map