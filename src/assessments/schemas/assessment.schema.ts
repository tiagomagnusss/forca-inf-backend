import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { HydratedDocument, Types, Schema as MongooseSchema } from 'mongoose';
import { Subject } from 'rxjs';
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
  semester: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  @Type(() => User)
  owner: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Subject' })
  @Type(() => Subject)
  subject: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Teacher' })
  @Type(() => Teacher)
  teacher: Types.ObjectId;

  @Prop({ default: Date.now, required: true })
  createdAt: Date;

  @Prop({ default: Date.now, required: true })
  updatedAt: Date;

  @Prop({ enum: ['A', 'B', 'C', 'D', 'FF'], required: true })
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
