import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Assessment,
  AssessmentDocument,
} from 'src/assessments/schemas/assessment.schema';
import { Teacher, TeacherDocument } from 'src/teachers/schemas/teacher.schema';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject, SubjectDocument } from './schemas/subject.schema';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name)
    private readonly subjectModel: Model<SubjectDocument>,
    @InjectModel(Assessment.name)
    private readonly assessmentModel: Model<AssessmentDocument>,
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const createdSubject = await this.subjectModel.create(createSubjectDto);
    return createdSubject;
  }

  async findAll(): Promise<Subject[]> {
    let subjects = await this.subjectModel
      .find()
      .sort({ name: 'asc' })
      .lean()
      .exec();

    subjects = await Promise.all(
      subjects.map(async (sub) => {
        let assessments: any[] = await this.assessmentModel
          .find({ subject: sub._id })
          .lean()
          .exec();

        assessments = await Promise.all(
          assessments.map(async (a) => {
            const teacher: Teacher = await this.teacherModel
              .findById(a.teacher)
              .lean()
              .exec();

            return { ...a, teacher };
          }),
        );

        return { ...sub, assessments };
      }),
    );

    return subjects;
  }

  async findOne(id: string): Promise<Subject> {
    const subject = await this.subjectModel.findById(id).lean().exec();

    let assessments: any[] = await this.assessmentModel
      .find({ subject: id })
      .lean()
      .exec();

    assessments = await Promise.all(
      assessments.map(async (a) => {
        const teacher: Teacher = await this.teacherModel
          .findById(a.teacher)
          .lean()
          .exec();

        return { ...a, teacher };
      }),
    );

    return { ...subject, assessments };
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    const updatedSubject = await this.subjectModel;
    return updatedSubject;
  }

  async delete(id: string) {
    const deletedSubject = await this.subjectModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedSubject;
  }
}
