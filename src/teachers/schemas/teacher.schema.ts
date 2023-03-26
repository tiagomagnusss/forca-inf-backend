import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
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

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
