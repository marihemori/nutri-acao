import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentCompany } from '../entities/agent-company.entity';
import { Company } from '../entities/company.entity';
import { AgentCompanyController } from '../controllers/agent-company.controller';
import { AgentCompanyService } from '../services/agent-company.service';
import { CompanyRepository } from '../repository/company.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AgentCompany, Company])],
  controllers: [AgentCompanyController],
  providers: [AgentCompanyService, CompanyRepository],
  exports: [],
})
export class AgentCompanyModule {}
