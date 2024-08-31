import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../entities/company.entity';
import { CompanyController } from '../controllers/company.controller';
import { CompanyService } from '../services/company.service';
import { CompanyRepository } from '../repository/company.repository';
import { AgentCompany } from '../entities/agent-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, AgentCompany])],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository, CompanyRepository],
  exports: [CompanyService],
})
export class CompanyModule {}
