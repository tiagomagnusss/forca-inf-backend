import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Assessment } from './schemas/assessment.schema';

@Controller('Assessments')
export class AssessmentsController {
  constructor(private readonly AssessmentsService: AssessmentsService) {}

  @Post()
  async create(@Body() createAssessmentDto: CreateAssessmentDto) {
    await this.AssessmentsService.create(createAssessmentDto);
  }

  @Get()
  async findAll(): Promise<Assessment[]> {
    return this.AssessmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Assessment> {
    return this.AssessmentsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.AssessmentsService.delete(id);
  }
}
