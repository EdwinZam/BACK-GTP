import { Body, Controller, Post } from '@nestjs/common';
import { HypnoAssistantService } from './hypno-assistant.service';
import { QuestionDto } from './dto/question.dto';

@Controller('hypno-assistant')
export class HypnoAssistantController {
  constructor(private readonly hypnoAssistantService: HypnoAssistantService) {}

  @Post('create-thread')
  async createThread(){
    return await this.hypnoAssistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ){  
    return await this.hypnoAssistantService.userQuestion(questionDto);
  }
}
