import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SubjectServices } from '../services/use-cases/subject/subjects.service';
import {
  SubjectDto,
  Subject,
  UpdateSubjectDto,
  HealthCondition,
  UpdateHealthConditionDto,
  CreateHealthConditionDto,
  CreateGeneralInfoDto,
} from '../core';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('api/subjects')
@UseGuards(JwtGuard)
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectServices) {}

  @Post()
  async create(@Body() createSubjectDto: Subject) {
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  async findAll(): Promise<Subject[]> {
    return this.subjectsService.findAll();
  }

  @Get(':subjectId')
  async findOne(@Param('subjectId') subjectId: string): Promise<Subject> {
    return this.subjectsService.findOne(subjectId);
  }

  @Patch(':subjectId')
  async update(
    @Param('subjectId') subjectId: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    return this.subjectsService.update(subjectId, updateSubjectDto);
  }

  @Delete(':subjectId')
  async remove(@Param('subjectId') subjectId: string) {
    return this.subjectsService.remove(subjectId);
  }
}
