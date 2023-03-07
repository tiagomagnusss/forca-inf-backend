import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Assessment, AssessmentDocument } from './schemas/assessment.schema';

@Injectable()
export class AssessmentsService {
  constructor(
    @InjectModel(Assessment.name)
    private readonly assessmentModel: Model<AssessmentDocument>,
  ) {}

  async create(createAssessmentDto: CreateAssessmentDto): Promise<Assessment> {
    const createdAssessment = await this.assessmentModel.create(createAssessmentDto);
    return createdAssessment;
  }

  async findAll(): Promise<Assessment[]> {
    return this.assessmentModel.find().exec();
  }

  async findOne(id: string): Promise<Assessment> {
    return this.assessmentModel.findOne({ _id: id }).lean().exec();
  }

  async delete(id: string) {
    const deletedAssessment = await this.assessmentModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedAssessment;
  }
}
