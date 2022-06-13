import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SubjectServices } from '../services/use-cases/subjects/subjects.service';
import {
  SubjectDto,
  Subject,
  UpdateSubjectDto,
} from '../core';

@Controller('api/subjects')
// @UseGuards(JwtAuthenticationGuard)
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectServices) {}

  @Post()
  async create(@Body() createSubjectDto: SubjectDto) {
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
