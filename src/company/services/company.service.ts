import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/company/create-company.dto';
import { CompanyRepository } from '../repository/company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  // Encontrar todas as empresas
  async findAllCompanies(): Promise<Company[]> {
    const companies = await this.companyRepository.findAllCompanies();
    return companies;
  }

  // Encontrar uma empresa por ID
  async findCompanyById(id: string): Promise<Company> {
    const company = await this.companyRepository.findCompanyById(id);
    if (!company) {
      throw new NotFoundException(`Empresa com o id: ${id} não encontrada!`);
    }
    return company;
  }

  // Criar uma empresa
  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyRepository.createCompany(createCompanyDto);
  }
}
