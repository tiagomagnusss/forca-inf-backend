import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AssessmentsModule } from './assessments/assessments.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URI'), // Loaded from .ENV
      }),
    }),
    AssessmentsModule,
    SubjectsModule,
    UsersModule,
    TeachersModule,
  ],
})
export class AppModule {}
