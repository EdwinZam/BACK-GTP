import { HypnoAssistantService } from './hypno-assistant.service';
import { QuestionDto } from './dto/question.dto';
export declare class HypnoAssistantController {
    private readonly hypnoAssistantService;
    constructor(hypnoAssistantService: HypnoAssistantService);
    createThread(): Promise<{
        id: string;
    }>;
    userQuestion(questionDto: QuestionDto): Promise<{
        role: "user" | "assistant";
        content: any[];
    }[]>;
}
