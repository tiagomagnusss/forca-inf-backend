import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAssessmentDto {
  title: string;

  comment: string;

  semester: string;

  @IsNotEmpty()
  owner: Types.ObjectId;

  @IsNotEmpty()
  subject: Types.ObjectId;

  @IsNotEmpty()
  teacher: Types.ObjectId;

  @IsNotEmpty()
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';
}
