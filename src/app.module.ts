import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';
import { HypnoAssistantModule } from './hypno-assistant/hypno-assistant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GptModule,
    HypnoAssistantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
