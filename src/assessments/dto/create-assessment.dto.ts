import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateAssessmentDto {
  title: string;

  comment: string;

  semester: string;

  owner: string;

  subject: string;

  teacher: string;

  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';
}
