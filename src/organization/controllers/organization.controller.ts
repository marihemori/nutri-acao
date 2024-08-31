import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../entities/organization.entity';
import { CreateOrganizationDto } from '../dto/organization/create-organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  // Encontrar todas as organizações
  @Get()
  async findAllOrganizations(): Promise<Organization[]> {
    return await this.organizationService.findAllOrganizations();
  }

  // Encontrar uma organização por ID
  @Get('/:id')
  async findOrganizationById(@Param('id') id: string): Promise<Organization> {
    const organization =
      await this.organizationService.findOrganizationById(id);
    console.log(organization);
    return organization;
  }

  // Criar uma organização
  @Post('/create')
  async createOrganization(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationService.createOrganization(createOrganizationDto);
  }
}
