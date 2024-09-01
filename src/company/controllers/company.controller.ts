import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/company/create-company.dto';
import { Company } from '../entities/company.entity';
import { ReceivedFood } from 'src/organization/entities/received-food.entity';
import { ReceivedFoodDto } from 'src/organization/dto/food/received-food.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Empresas')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({ summary: 'Lista todas as empresas' })
  @ApiResponse({
    status: 200,
    type: Company,
    description: 'Lista de empresas',
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Encontrar todas as empresas
  @Get()
  async findAllCompanies(): Promise<Company[]> {
    return await this.companyService.findAllCompanies();
  }

  @ApiOperation({ summary: 'Encontra uma empresa por ID' })
  @ApiResponse({
    status: 200,
    type: Company,
    description: 'Empresa encontrada',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Encontrar uma empresa por ID
  @Get('/:id')
  async findCompanyById(@Param('id') id: string): Promise<Company> {
    const company = await this.companyService.findCompanyById(id);
    console.log(company);
    return company;
  }

  @ApiOperation({ summary: 'Cria uma empresa' })
  @ApiResponse({
    status: 201,
    type: Company,
    description: 'Empresa criada',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Criar uma empresa
  @Post('/create')
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }

  @ApiOperation({ summary: 'Envia alimento para uma organização' })
  @ApiResponse({
    status: 201,
    type: ReceivedFood,
    description: 'Alimento enviado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Enviar alimento para a organização
  @Post(':companyId/organizations/:organizationId/donate-food')
  async sendFoodToOrganization(
    @Param('companyId') companyId: string,
    @Param('organizationId') organizationId: string,
    @Body() receivedFoodDto: ReceivedFoodDto,
  ): Promise<ReceivedFood> {
    try {
      const receivedFood = await this.companyService.sendFoodToOrganization(
        companyId,
        organizationId,
        receivedFoodDto,
      );
      return receivedFood;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new Error(error.message);
      }
      throw new Error('Erro ao enviar alimento para a organização!');
    }
  }
}
