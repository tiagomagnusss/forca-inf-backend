import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { AssessmentsService } from './assessments.service';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { Assessment } from './schemas/assessment.schema';

@Controller('Assessments')
export class AssessmentsController {
  constructor(private readonly assessmentsService: AssessmentsService) {}

  // @UseGuards(RolesGuard)
  // @Roles(Role.Student, Role.Admin)
  @Post()
  async create(@Body() createAssessmentDto: CreateAssessmentDto) {
    await this.assessmentsService.create(createAssessmentDto);
  }

  @Get()
  async findAll(): Promise<Assessment[]> {
    return this.assessmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Assessment> {
    return this.assessmentsService.findOne(id);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Student, Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.assessmentsService.delete(id);
  }
}
