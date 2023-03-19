import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Assessment,
  AssessmentDocument,
} from 'src/assessments/schemas/assessment.schema';
import { Subject, SubjectDocument } from 'src/subjects/schemas/subject.schema';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teacher.schema';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
    @InjectModel(Assessment.name)
    private readonly assessmentModel: Model<AssessmentDocument>,
    @InjectModel(Subject.name)
    private readonly subjectModel: Model<SubjectDocument>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createdTeacher = await this.teacherModel.create(createTeacherDto);
    return createdTeacher;
  }

  async findAll(): Promise<Teacher[]> {
    let teachers = await this.teacherModel
      .find()
      .sort({ name: 'asc' })
      .lean()
      .exec();

    teachers = await Promise.all(
      teachers.map(async (t) => {
        let assessments: any[] = await this.assessmentModel
          .find({ teacher: t._id })
          .lean()
          .exec();

        assessments = await Promise.all(
          assessments.map(async (a) => {
            const subject: Subject = await this.subjectModel
              .findById(a.subject)
              .lean()
              .exec();

            return { ...a, subject };
          }),
        );

        return { ...t, assessments };
      }),
    );

    return teachers;
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findById(id).lean().exec();

    let assessments: any[] = await this.assessmentModel
      .find({ teacher: id })
      .lean()
      .exec();

    assessments = await Promise.all(
      assessments.map(async (a) => {
        const subject: Subject = await this.subjectModel
          .findById(a.subject)
          .exec();

        return { ...a, subject };
      }),
    );

    return { ...teacher, assessments };
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    const updatedTeacher = await this.teacherModel;
    return updatedTeacher;
  }

  async delete(id: string) {
    const deletedTeacher = await this.teacherModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedTeacher;
  }
}
