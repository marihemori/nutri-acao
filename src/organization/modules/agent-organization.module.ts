import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentOrganization } from '../entities/agent-organization.entity';
import { Organization } from '../entities/organization.entity';
import { AgentOrganizationController } from '../controllers/agent-organization.controller';
import { AgentOrganizationService } from '../services/agent-organization.service';
import { OrganizationRepository } from '../repository/organization.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AgentOrganization, Organization])],
  controllers: [AgentOrganizationController],
  providers: [AgentOrganizationService, OrganizationRepository],
  exports: [],
})
export class AgentOrganizationModule {}
