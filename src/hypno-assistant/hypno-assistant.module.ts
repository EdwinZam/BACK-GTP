import { Module } from '@nestjs/common';
import { HypnoAssistantService } from './hypno-assistant.service';
import { HypnoAssistantController } from './hypno-assistant.controller';

@Module({
  controllers: [HypnoAssistantController],
  providers: [HypnoAssistantService],
})
export class HypnoAssistantModule {}
