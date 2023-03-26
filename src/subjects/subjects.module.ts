import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { Subject, SubjectSchema } from './schemas/subject.schema';
import {
  Assessment,
  AssessmentSchema,
} from 'src/assessments/schemas/assessment.schema';
import { Teacher, TeacherSchema } from 'src/teachers/schemas/teacher.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subject.name, schema: SubjectSchema },
      {
        name: Assessment.name,
        schema: AssessmentSchema,
      },
      {
        name: Teacher.name,
        schema: TeacherSchema,
      },
    ]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
