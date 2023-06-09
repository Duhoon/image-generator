import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GeneratorModule } from './generator/generator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:  true,
    }),
    GeneratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
