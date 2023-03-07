import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Assessment } from 'src/assessments/schemas/assessment.schema';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher {
  @Prop()
  name: string;

  @Prop({ enum: ['A', 'B', 'C', 'D', 'FF'] })
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';

  @Prop()
  site: string;

  @Prop()
  assessments: Assessment[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
