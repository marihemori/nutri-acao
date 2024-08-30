import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/company/create-company.dto';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  // Encontrar todas as empresas
  async findAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  // Encontrar uma empresa por ID
  async findCompanyById(id: string): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ id });
    console.log(company);
    return company;
  }

  // Criar uma empresa
  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }
}
