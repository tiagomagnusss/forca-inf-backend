import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from 'src/subjects/schemas/subject.schema';
import { Teacher, TeacherSchema } from 'src/teachers/schemas/teacher.schema';
import { AssessmentsController } from './assessments.controller';
import { AssessmentsService } from './assessments.service';
import { Assessment, AssessmentSchema } from './schemas/assessment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
      { name: Subject.name, schema: SubjectSchema },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
  controllers: [AssessmentsController],
  providers: [AssessmentsService],
})
export class AssessmentsModule {}
