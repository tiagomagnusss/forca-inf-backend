import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Subject } from 'src/subjects/schemas/subject.schema';
import { Teacher } from 'src/teachers/schemas/teacher.schema';
import { User } from 'src/users/schemas/user.schema';

export type AssessmentDocument = HydratedDocument<Assessment>;

@Schema()
export class Assessment {
  @Prop()
  title?: string;

  @Prop()
  comment: string;

  @Prop()
  owner: User;

  @Prop()
  subject: Subject;

  @Prop()
  semester: string;

  @Prop()
  teacher: Teacher;

  @Prop()
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
