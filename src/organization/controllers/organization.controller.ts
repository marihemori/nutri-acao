import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../entities/organization.entity';
import { CreateOrganizationDto } from '../dto/organization/create-organization.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Organizações')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @ApiOperation({ summary: 'Lista todas as organizações' })
  @ApiResponse({
    status: 200,
    type: Organization,
    description: 'Lista de organizações',
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
  // Encontrar todas as organizações
  @Get()
  async findAllOrganizations(): Promise<Organization[]> {
    return await this.organizationService.findAllOrganizations();
  }

  @ApiOperation({ summary: 'Encontra uma organização por ID' })
  @ApiResponse({
    status: 200,
    type: Organization,
    description: 'Organização encontrada',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
  // Encontrar uma organização por ID
  @Get('/:id')
  async findOrganizationById(@Param('id') id: string): Promise<Organization> {
    const organization =
      await this.organizationService.findOrganizationById(id);
    console.log(organization);
    return organization;
  }

  @ApiOperation({ summary: 'Cria uma organização' })
  @ApiResponse({
    status: 201,
    type: Organization,
    description: 'Organização criada',
    isArray: false,
  })
  @ApiResponse({
    status: 404,
    description: 'Não foi possível criar a organização!',
  })
  // Criar uma organização
  @Post('/create')
  async createOrganization(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationService.createOrganization(createOrganizationDto);
  }
}
