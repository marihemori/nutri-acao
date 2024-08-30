import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CreateCompanyDto } from '../dto/company/create-company.dto';
import { Company } from '../entities/company.entity';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // Encontrar todas as empresas
  @Get()
  async findAllCompanies(): Promise<Company[]> {
    return await this.companyService.findAllCompanies();
  }

  // Encontrar uma empresa por ID
  @Get('/:id')
  async findCompanyById(@Param('id') id: string): Promise<Company> {
    const company = await this.companyService.findCompanyById(id);
    console.log(company);
    return company;
  }

  // Criar uma empresa
  @Post('/create')
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }
}
