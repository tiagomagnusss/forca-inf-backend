export class CreateTeacherDto {
  name: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'FF';
  site: string;
}
