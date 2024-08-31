import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../entities/company.entity';
import { CompanyController } from '../controllers/company.controller';
import { CompanyService } from '../services/company.service';
import { CompanyRepository } from '../repository/company.repository';
import { AgentCompany } from '../entities/agent-company.entity';
import { ReceivedFood } from 'src/organization/entities/received-food.entity';
import { OrganizationModule } from 'src/organization/modules/organization.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company, AgentCompany, ReceivedFood]),
    OrganizationModule,
  ],
  providers: [CompanyService, CompanyRepository],
  controllers: [CompanyController],
  exports: [CompanyService],
})
export class CompanyModule {}
