import { IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  name: string;

  grade: 'A' | 'B' | 'C' | 'D' | 'FF';

  site: string;
}
