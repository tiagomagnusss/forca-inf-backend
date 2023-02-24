import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Assessment } from 'src/assessments/schemas/assessment.schema';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  assessments: Assessment[];
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
