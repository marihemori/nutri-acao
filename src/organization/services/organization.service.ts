import { Injectable, NotFoundException } from '@nestjs/common';
import { OrganizationRepository } from '../repository/organization.repository';
import { Organization } from '../entities/organization.entity';
import { CreateOrganizationDto } from '../dto/organization/create-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepository,
  ) {}

  // Encontrar todas as organizações
  async findAllOrganizations(): Promise<Organization[]> {
    const organizations =
      await this.organizationRepository.findAllOrganizations();
    return organizations;
  }

  // Encontrar uma organização por ID
  async findOrganizationById(id: string): Promise<Organization> {
    const organization =
      await this.organizationRepository.findOrganizationById(id);
    if (!organization) {
      throw new NotFoundException(`Organização não encontrada!`);
    }
    return organization;
  }

  // Criar uma organização
  async createOrganization(
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationRepository.createOrganization(
      createOrganizationDto,
    );
  }
}
