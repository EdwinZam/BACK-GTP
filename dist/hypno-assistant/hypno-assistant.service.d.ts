import { QuestionDto } from './dto/question.dto';
export declare class HypnoAssistantService {
    private openai;
    createThread(): Promise<{
        id: string;
    }>;
    userQuestion(questionDto: QuestionDto): Promise<{
        role: "user" | "assistant";
        content: any[];
    }[]>;
}
