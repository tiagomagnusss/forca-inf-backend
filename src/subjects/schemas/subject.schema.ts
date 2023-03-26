import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Assessment } from 'src/assessments/schemas/assessment.schema';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ enum: ['A', 'B', 'C', 'D', 'FF'] })
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Assessment' }],
  })
  @Type(() => Assessment)
  assessments: Assessment[];

  @Prop({ default: Date.now, required: true })
  createdAt: Date;

  @Prop({ default: Date.now, required: true })
  updatedAt: Date;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
