import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Assessment } from 'src/assessments/schemas/assessment.schema';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ enum: ['A', 'B', 'C', 'D', 'FF'] })
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';

  @Prop()
  assessments: Assessment[];
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
