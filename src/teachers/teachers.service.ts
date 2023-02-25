import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teacher.schema';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createdTeacher = await this.teacherModel.create(createTeacherDto);
    return createdTeacher;
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async findOne(id: string): Promise<Teacher> {
    return this.teacherModel.findOne({ _id: id }).lean().exec();
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
