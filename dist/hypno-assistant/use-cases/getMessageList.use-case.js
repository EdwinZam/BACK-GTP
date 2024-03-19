"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageListUseCase = void 0;
const getMessageListUseCase = async (openai, options) => {
    const { threadId } = options;
    const messageList = await openai.beta.threads.messages.list(threadId);
    const messages = messageList.data.map(message => ({
        role: message.role,
        content: message.content.map(content => content.text.value)
    }));
    return messages;
};
exports.getMessageListUseCase = getMessageListUseCase;
//# sourceMappingURL=getMessageList.use-case.js.map