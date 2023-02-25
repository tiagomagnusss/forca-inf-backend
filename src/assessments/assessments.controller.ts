import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AssessmentsService } from './assessments.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Assessment } from './schemas/assessment.schema';

@Controller('Assessments')
export class AssessmentsController {
  constructor(private readonly AssessmentsService: AssessmentsService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.AssessmentsService.delete(id);
  }
}
