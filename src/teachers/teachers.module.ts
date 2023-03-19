import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import {
  Assessment,
  AssessmentSchema,
} from 'src/assessments/schemas/assessment.schema';
import { Subject, SubjectSchema } from 'src/subjects/schemas/subject.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
      { name: Teacher.name, schema: TeacherSchema },
      { name: Subject.name, schema: SubjectSchema },
    ]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
